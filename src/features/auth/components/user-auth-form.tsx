"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import GithubSignInButton from "./github-auth-button";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const [isPending, startTransition] = useTransition();

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: UserFormValue) => {
    startTransition(async () => {
      try {
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false, // <-- important to read res.error
          callbackUrl, // can still be set; NextAuth returns res.url on success
        });

        if (!res) {
          toast.error("No response from authentication server.");
          return;
        }

        if (res?.error) {
          // Will be 'CredentialsSignin' for invalid creds
          const message =
            res.error === "CredentialsSignin"
              ? "Invalid email or password"
              : res.error;
          toast.error(message);
          return;
        }

        // Success: res.ok is true and res.url may be present
        if (res.ok) {
          // If NextAuth returns a URL, use it; otherwise push our callbackUrl
          if (res.url) {
            window.location.href = res.url;
          } else {
            router.push(callbackUrl);
          }
        } else {
          toast.error("Login failed. Please try again.");
        }
      } catch (err: any) {
        // Network or unexpected
        const msg = err?.message || "Authentication service unavailable";
        toast.error(msg);
      }
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password..."
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} className="w-full" type="submit">
            {isPending ? "Signing in…" : "Continue With Email"}
          </Button>

          <div className="text-right">
            <Link
              href="/forgotpassword"
              className="text-sm text-muted-foreground hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </Form>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <GithubSignInButton />
    </>
  );
}
