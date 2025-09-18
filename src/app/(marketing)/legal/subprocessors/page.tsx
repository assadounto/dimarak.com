// =============================================================
// app/(marketing)/legal/subprocessors/page.tsx — Subprocessors
// =============================================================
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { subprocessors } from "@/constants/subprocessors";

export const metadata = {
  title: "Subprocessors | Dimarak",
  description:
    "Third‑party providers engaged by Dimarak and the nature of processing.",
};

const LAST_UPDATED = "September 17, 2025";

export default function SubprocessorsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Subprocessors
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Dimarak engages certain third‑party providers to deliver our
            services. We impose data protection terms on each provider and
            remain responsible for their performance. Customers may subscribe to
            changes by contacting{" "}
            <a className="underline" href="mailto:privacy@dimarak.com">
              privacy@dimarak.com
            </a>
            .
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="#change-log">View change log</Link>
            </Button>
            <Button asChild>
              <Link href="/legal/dpa">View our DPA</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="container py-12 md:py-16">
        <div className="overflow-x-auto rounded-md border border-border/60 bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/30 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-foreground/80">
                  Provider
                </th>
                <th className="px-4 py-3 text-left font-medium">Purpose</th>
                <th className="px-4 py-3 text-left font-medium">
                  Data categories
                </th>
                <th className="px-4 py-3 text-left font-medium">Location</th>
                <th className="px-4 py-3 text-left font-medium">DPA / Terms</th>
                <th className="px-4 py-3 text-left font-medium">
                  Transfer mechanism
                </th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((sp, idx) => (
                <tr
                  key={sp.name}
                  className={idx % 2 === 0 ? "bg-background" : ""}
                >
                  <td className="px-4 py-3 whitespace-nowrap text-foreground/90">
                    <Link
                      className="underline"
                      href={sp.website}
                      target="_blank"
                    >
                      {sp.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {sp.purpose}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <div className="flex flex-wrap gap-1">
                      {sp.dataCategories.map((c) => (
                        <span
                          key={c}
                          className="rounded border border-border/60 bg-background px-2 py-0.5 text-xs"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {sp.location}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {sp.dpa ? (
                      <Link className="underline" href={sp.dpa} target="_blank">
                        DPA/Terms
                      </Link>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {sp.transfer ?? "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Some providers operate globally with regional data centers; region may
          vary based on configuration and customer requirements.
        </p>
      </section>

      {/* Objections & notice policy */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">
                Notice & objections policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                We will provide advance notice of changes to this list where
                required. Customers with a current DPA may object to a new
                Subprocessor on reasonable grounds related to data protection by
                contacting{" "}
                <a className="underline" href="mailto:privacy@dimarak.com">
                  privacy@dimarak.com
                </a>
                . We will work in good faith to address objections.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Change log */}
      <section id="change-log" className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Change log</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">September 17, 2025</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Initial publication of subprocessors list.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Questions about a provider?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We\'re happy to share details on data flows, storage, and
                  security measures.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button asChild>
                  <Link href="/contact">Contact us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/security">Security overview</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
