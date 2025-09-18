// =============================================================
// app/(marketing)/legal/cookies/page.tsx — Cookies & Preferences
// =============================================================
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {  categories,
  cookieCatalog,
  defaultConsent,
  type ConsentMap, } from "@/constants/cookies";
import {
  getConsentClient,
  setConsentClient,
  resetConsentClient,
} from "@/lib/consent";

export const metadata = {
  title: "Cookies & Preferences | Dimarak",
  description:
    "Manage your cookie preferences for Dimarak. Learn what we use and why.",
};

export default function CookiesPage() {
  const [consent, setConsent] = React.useState<ConsentMap>(defaultConsent);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const existing = getConsentClient();
    if (existing) setConsent(existing);
    setLoaded(true);
  }, []);

  function updateCat(key: keyof ConsentMap, value: boolean) {
    if (key === "essential") return; // always true
    setConsent((c) => ({ ...c, [key]: value }));
  }

  function savePrefs() {
    setConsentClient(consent);
    alert("Your cookie preferences have been saved.");
  }

  if (!loaded) return null;

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Cookies & Preferences
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We use cookies and similar technologies for essential site
            operations, analytics, and (optional) marketing. You can manage your
            preferences below.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Essential</Badge>
            <Badge variant="secondary">Analytics</Badge>
            <Badge variant="secondary">Marketing</Badge>
          </div>
        </div>
      </section>

      {/* Preferences */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr,1fr] gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Manage preferences</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div
                    key={cat.key}
                    className="flex items-start justify-between gap-6"
                  >
                    <div>
                      <div className="font-medium text-card-foreground">
                        {cat.label}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {cat.desc}
                      </p>
                    </div>
                    <Switch
                      checked={consent[cat.key]}
                      onCheckedChange={(v) => updateCat(cat.key, v)}
                      disabled={cat.key === "essential"}
                    />
                  </div>
                ))}
                <div className="pt-2 flex flex-wrap gap-3">
                  <Button
                    onClick={() => {
                      setConsentClient({
                        essential: true,
                        analytics: true,
                        marketing: true,
                      });
                      setConsent({
                        essential: true,
                        analytics: true,
                        marketing: true,
                      });
                    }}
                  >
                    Accept all
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const c = {
                        essential: true,
                        analytics: false,
                        marketing: false,
                      } as ConsentMap;
                      setConsent(c);
                      setConsentClient(c);
                    }}
                  >
                    Reject non‑essential
                  </Button>
                  <Button variant="outline" onClick={savePrefs}>
                    Save preferences
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      resetConsentClient();
                      setConsent(defaultConsent);
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Essential cookies are required for core functionality
                  (security, consent).
                </li>
                <li>
                  Analytics help us improve the site. Disabled by default until
                  you opt in.
                </li>
                <li>
                  Marketing cookies personalize content/ads. Disabled by
                  default.
                </li>
              </ul>
              <p className="mt-3">
                See our{" "}
                <Link className="underline" href="/legal/privacy">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Catalog */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Cookies we use</h2>
          <div className="mt-6 overflow-x-auto rounded-md border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/30 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-foreground/80">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Purpose</th>
                  <th className="px-4 py-3 text-left font-medium">Category</th>
                  <th className="px-4 py-3 text-left font-medium">Provider</th>
                  <th className="px-4 py-3 text-left font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                {cookieCatalog.map((ck, idx) => (
                  <tr
                    key={ck.name}
                    className={idx % 2 === 0 ? "bg-background" : ""}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-foreground/90">
                      {ck.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {ck.purpose}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {ck.category}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {ck.provider}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {ck.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Vendors and durations may change. We keep this catalog current.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Questions about cookies?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Contact{" "}
                <a className="underline" href="mailto:privacy@dimarak.com">
                  privacy@dimarak.com
                </a>
                .
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild>
                <Link href="/legal/privacy">Privacy Policy</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/security">Security</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
