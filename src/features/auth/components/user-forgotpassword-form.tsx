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
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function ForgotPasswordForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, startTransition] = useTransition();

  const defaultValues = {
    email: "",
  };

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    startTransition(() => {
      try {
        // Here you would call your API to send OTP
        // Example: await sendPasswordResetOtp(data.email);
        toast.success("OTP sent successfully! Check your email");
        // Redirect to OTP verification page
        window.location.href = `/verify-otp?email=${encodeURIComponent(data.email)}${callbackUrl ? `&callbackUrl=${callbackUrl}` : ""}`;
      } catch (error) {
        toast.error("Failed to send OTP. Please try again.");
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="w-full" type="submit" size="lg">
            {loading ? "Sending..." : "Send Verification Code"}
          </Button>

          <div className="mt-4 text-center text-sm">
            <Link href="/signin" className="text-primary hover:underline">
              Back to login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
