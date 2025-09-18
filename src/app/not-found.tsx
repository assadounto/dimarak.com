// =============================================================
// app/not-found.tsx — Custom 404 for App Router
// =============================================================
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Compass, ArrowLeft, Home, MailQuestion, LifeBuoy } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const [copied, setCopied] = React.useState(false);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <main className="bg-background text-foreground">
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground">
            <Compass className="h-3.5 w-3.5" />
            404 — Page not found
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            We couldn’t find that page
          </h1>
          <p className="mt-3 text-muted-foreground">
            The URL may be incorrect or the page has moved. Choose a destination
            below, or contact us and we’ll help you get to the right place.
          </p>

          <div className="mt-6 text-xs text-muted-foreground">
            Requested URL:{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-foreground/90">
              {pathname}
            </code>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => router.back()} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Button>
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Explore services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/solutions">Browse solutions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                <MailQuestion className="mr-2 h-4 w-4" />
                Contact us
              </Link>
            </Button>
          </div>

          <Separator className="my-10" />

          {/* Helpful links */}
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <div className="text-sm font-medium">Popular destinations</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>
                    <Link href="/pricing" className="underline">
                      Pricing & SLAs
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="underline">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="underline">
                      Security & Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal" className="underline">
                      Legal (Privacy, Terms, DPA)
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <div className="text-sm font-medium">Need help?</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us what you were trying to do. We typically reply within
                  one business day.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button asChild size="sm">
                    <Link
                      href={`/contact?context=404&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : pathname)}`}
                    >
                      Open contact form
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" onClick={copyUrl}>
                    {copied ? "Copied URL" : "Copy URL"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-md border border-border/60 bg-card px-3 py-2 text-xs text-muted-foreground">
            <LifeBuoy className="h-3.5 w-3.5" /> If you keep seeing this, please
            report it via the contact form.
          </div>
        </div>
      </section>
    </main>
  );
}
