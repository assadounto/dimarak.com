// components/auth/AuthModal.tsx
"use client";

import { useMemo, useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion } from "framer-motion";

// shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import apiClient from "@/lib/apiClient";

// ---------- Config ----------
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.RAILS_API_BASE_URL ||
  "http://localhost:3000/v1";

// detect providers (show buttons only if configured)
const GOOGLE_ENABLED = !!process.env.NEXT_PUBLIC_AUTH_GOOGLE;
const APPLE_ENABLED = !!process.env.NEXT_PUBLIC_AUTH_APPLE;

const social = [
  { key: "github", label: "Continue with GitHub", enabled: true },
  { key: "google", label: "Continue with Google", enabled: true },
  { key: "apple", label: "Continue with Apple", enabled: APPLE_ENABLED },
].filter((s) => s.enabled);

// ---------- Schemas ----------
const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Your name"),
    email: z.string().email(),
    password: z.string().min(6),
    confirm: z.string().min(6),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

const magicSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6).optional(), // required after sending
});

type SignInValues = z.infer<typeof signinSchema>;
type SignUpValues = z.infer<typeof signupSchema>;
type MagicValues = z.infer<typeof magicSchema>;

// ---------- Password strength ----------
function scorePassword(pw: string) {
  if (!pw) return 0;
  let score = 0;
  const rules = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/, /.{8,}/];
  rules.forEach((r) => r.test(pw) && (score += 1));
  if (/.{12,}/.test(pw)) score += 1;
  return Math.min(score, 6); // 0..6
}
function strengthLabel(score: number) {
  return (
    ["Very weak", "Weak", "Fair", "Good", "Strong", "Very strong", "Excellent"][
      score
    ] || "Weak"
  );
}
function strengthColor(score: number) {
  return (
    [
      "#ef4444",
      "#f97316",
      "#f59e0b",
      "#22c55e",
      "#16a34a",
      "#0ea5e9",
      "#6366f1",
    ][score] || "#f97316"
  );
}

// ---------- Component ----------
export default function AuthModal({
  open,
  onOpenChange,
  callbackUrl = "/dashboard",
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  callbackUrl?: string;
}) {
  const [tab, setTab] = useState<"signin" | "signup" | "magic">("signin");
  const [isPending, startTransition] = useTransition();
  const [otpSent, setOtpSent] = useState(false);

  // Sign in
  const si = useForm<SignInValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: "", password: "" },
  });
  async function onSignIn(values: SignInValues) {
    startTransition(async () => {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl,
      });
      if (res?.error) {
        toast.error(
          res.error === "CredentialsSignin"
            ? "Invalid email or password"
            : res.error,
        );
        return;
      }
      toast.success("Welcome back!");
      onOpenChange(false);
      window.location.href = res?.url ?? callbackUrl;
    });
  }

  // Sign up
  const su = useForm<SignUpValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirm: "" },
  });
  const pwScore = useMemo(
    () => scorePassword(su.watch("password")),
    [su.watch("password")],
  );
  async function onSignUp(values: SignUpValues) {
    startTransition(async () => {
      try {
        await apiClient.post(`/users/signup`, {
          user: {
            name: values.name,
            email: values.email,
            password: values.password,
          },
        });
        toast.success(
          "Account created. Check your email to verify (if required), then sign in.",
        );
        setTab("signin");
      } catch (e: any) {
        toast.error(e?.response?.data?.message || "Could not create account");
      }
    });
  }

  // Magic link / OTP
  const mg = useForm<MagicValues>({
    resolver: zodResolver(magicSchema),
    defaultValues: { email: "", code: "" },
  });
  async function sendOTP(email: string) {
    try {
      await axios.post(`${BASE_URL}/auth/magic/send`, { email });
      setOtpSent(true);
      toast.success("Code sent to your email");
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Could not send code");
    }
  }
  async function verifyOTP(email: string, code: string) {
    try {
      // expect: returns session/JWT
      await axios.post(`${BASE_URL}/auth/magic/verify`, { email, code });
      toast.success("Signed in!");
      onOpenChange(false);
      window.location.href = callbackUrl;
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Invalid code");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-3xl p-0">
        {/* Fixed height container; children scroll internally */}
        <div className="grid h-[78vh] grid-cols-1 overflow-hidden md:grid-cols-[1.1fr,1fr]">
          {/* LEFT: forms (scrollable) */}
          <div className="flex min-h-0 flex-col overflow-y-auto px-6 pb-6 pt-6">
            <DialogHeader className="mb-2 px-0 pb-0">
              <DialogTitle className="text-xl">Welcome to Xonbay</DialogTitle>
            </DialogHeader>

            <Tabs
              value={tab}
              onValueChange={(v) => setTab(v as any)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="signin">Sign in</TabsTrigger>
                <TabsTrigger value="signup">Create account</TabsTrigger>
                <TabsTrigger value="magic">Magic Link / OTP</TabsTrigger>
              </TabsList>

              {/* Sign in */}
              <TabsContent value="signin" className="mt-4">
                <div className="min-h-0">
                  <form
                    onSubmit={si.handleSubmit(onSignIn)}
                    className="space-y-3"
                  >
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...si.register("email")}
                      />
                      <p className="text-xs text-rose-600">
                        {si.formState.errors.email?.message}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Password</label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...si.register("password")}
                      />
                      <p className="text-xs text-rose-600">
                        {si.formState.errors.password?.message}
                      </p>
                    </div>

                    <Button
                      disabled={isPending}
                      className="w-full"
                      type="submit"
                    >
                      {isPending ? "Signing in…" : "Sign in"}
                    </Button>

                    <div className="my-2 text-center text-xs text-muted-foreground">
                      or
                    </div>

                    <div className="space-y-2">
                      {social.map((s) => (
                        <Button
                          key={s.key}
                          variant="outline"
                          className="w-full"
                          type="button"
                          onClick={() => signIn(s.key, { callbackUrl })}
                        >
                          {s.label}
                        </Button>
                      ))}
                    </div>

                    <div className="text-right text-xs">
                      <a className="underline" href="/forgotpassword">
                        Forgot password?
                      </a>
                    </div>
                  </form>
                </div>
              </TabsContent>

              {/* Sign up */}
              <TabsContent value="signup" className="mt-4">
                <div className="min-h-0">
                  <form
                    onSubmit={su.handleSubmit(onSignUp)}
                    className="space-y-3"
                  >
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your name" {...su.register("name")} />
                      <p className="text-xs text-rose-600">
                        {su.formState.errors.name?.message}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...su.register("email")}
                      />
                      <p className="text-xs text-rose-600">
                        {su.formState.errors.email?.message}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <Input
                        type="password"
                        placeholder="At least 6 characters"
                        {...su.register("password")}
                      />
                      <PasswordStrength
                        value={su.watch("password")}
                        score={pwScore}
                      />
                      <p className="text-xs text-rose-600">
                        {su.formState.errors.password?.message}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium">Confirm</label>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        {...su.register("confirm")}
                      />
                      <p className="text-xs text-rose-600">
                        {su.formState.errors.confirm?.message}
                      </p>
                    </div>

                    <Button
                      disabled={isPending}
                      className="w-full"
                      type="submit"
                    >
                      {isPending ? "Creating…" : "Create account"}
                    </Button>

                    <p className="pt-1 text-center text-xs text-muted-foreground">
                      By continuing, you agree to our{" "}
                      <a className="underline" href="/terms">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a className="underline" href="/privacy">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </TabsContent>

              {/* Magic / OTP */}
              <TabsContent value="magic" className="mt-4">
                <div className="min-h-0">
                  <form
                    onSubmit={mg.handleSubmit(async (vals) => {
                      if (!otpSent) return sendOTP(vals.email);
                      if (vals.email && vals.code?.length === 6)
                        return verifyOTP(vals.email, vals.code);
                    })}
                    className="space-y-3"
                  >
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...mg.register("email")}
                        disabled={otpSent}
                      />
                      <p className="text-xs text-rose-600">
                        {mg.formState.errors.email?.message}
                      </p>
                    </div>

                    {!otpSent ? (
                      <Button className="w-full" type="submit">
                        Send code
                      </Button>
                    ) : (
                      <>
                        <div className="space-y-1">
                          <label className="text-sm font-medium">
                            6-digit code
                          </label>
                          <OTPInputs valueName="code" register={mg.register} />
                          <p className="text-xs text-rose-600">
                            {mg.formState.errors.code?.message}
                          </p>
                        </div>
                        <Button className="w-full" type="submit">
                          Verify & Sign in
                        </Button>
                        <button
                          type="button"
                          className="w-full text-center text-xs underline"
                          onClick={() => {
                            setOtpSent(false);
                            mg.reset({
                              email: mg.getValues("email"),
                              code: "",
                            });
                          }}
                        >
                          Resend / change email
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* RIGHT: infographics (scrollable) */}
          <aside className="relative hidden min-h-0 overflow-y-auto border-l bg-gradient-to-b from-indigo-50 via-white to-amber-50 p-6 dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 md:block">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold dark:text-white">Why Xonbay?</h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li>🛍️ Open your shop in minutes</li>
                <li>
                  💳 Secure checkout (Cards & MoMo) in <strong>₵</strong>
                </li>
                <li>🚚 Shipping & tracking built-in</li>
                <li>📈 Analytics & growth tools</li>
              </ul>

              <div className="rounded-xl border p-4 text-sm dark:border-gray-800">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Platform stats
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <Stat label="Uptime" value="99.95%" />
                  <Stat label="TTFB" value="<300ms" />
                  <Stat label="Security" value="A+" />
                </div>
              </div>

              <div className="rounded-xl border p-4 text-sm dark:border-gray-800">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Trusted by sellers
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300">
                  “We launched in a weekend—shipping updates cut support DMs in
                  half.”
                </blockquote>
                <div className="mt-1 text-xs text-gray-500">
                  — Ama B., Accra
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />{" "}
                PCI-DSS checkout
              </div>
            </motion.div>

            {/* subtle glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-100 blur-3xl dark:bg-indigo-900/20" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-amber-100 blur-3xl dark:bg-amber-900/20" />
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ---------- Small components ----------
function PasswordStrength({ value, score }: { value: string; score: number }) {
  const label = strengthLabel(score);
  const color = strengthColor(score);
  return (
    <div className="space-y-1">
      <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-800">
        <div
          className="h-2 rounded transition-all"
          style={{ width: `${(score / 6) * 100}%`, background: color }}
        />
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-600 dark:text-gray-400">{label}</span>
        <span className="text-gray-500">
          {value?.length ? `${value.length} chars` : ""}
        </span>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-gray-950">
      <div className="text-[11px] uppercase text-gray-500">{label}</div>
      <div className="text-sm font-semibold dark:text-white">{value}</div>
    </div>
  );
}

function OTPInputs({
  valueName,
  register,
}: {
  valueName: string;
  register: any;
}) {
  // Simple single field; swap to 6-box UI later if you want auto-advance
  return (
    <Input
      inputMode="numeric"
      maxLength={6}
      placeholder="Enter 6-digit code"
      {...register(valueName)}
    />
  );
}
