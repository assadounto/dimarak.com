// =============================================================
// app/(marketing)/legal/terms/page.tsx — Terms of Service
// =============================================================
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Terms of Service | Dimarak",
  description:
    "Contract terms governing the use of Dimarak’s website and services.",
};

const EFFECTIVE_DATE = "September 17, 2025";

const sections = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "changes", title: "Changes to Terms" },
  { id: "eligibility", title: "Eligibility" },
  { id: "accounts", title: "Accounts & Security" },
  { id: "use", title: "Acceptable Use" },
  { id: "services", title: "Services & Statements of Work" },
  { id: "fees", title: "Fees & Payment" },
  { id: "ip", title: "Intellectual Property" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "privacy", title: "Privacy" },
  { id: "warranties", title: "Disclaimers & Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnity", title: "Indemnity" },
  { id: "termination", title: "Term & Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These Terms govern your access to and use of Dimarak’s website and
            services. By accessing or using our services, you agree to these
            Terms.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            Effective: {EFFECTIVE_DATE}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-[280px,1fr] gap-8">
          {/* TOC */}
          <aside className="hidden md:block">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              On this page
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a className="underline" href={`#${s.id}`}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="space-y-8">
            <Card id="agreement" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Agreement to Terms
                </h2>
                <p>
                  These Terms of Service ("Terms") are a binding agreement
                  between you and Dimarak Ltd. ("Dimarak", "we", "us"). If you
                  are agreeing on behalf of an organization, you represent that
                  you have authority to bind that organization. If you do not
                  agree, do not use our website or services.
                </p>
              </CardContent>
            </Card>

            <Card id="changes" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Changes to Terms
                </h2>
                <p>
                  We may update these Terms from time to time. If we make
                  material changes, we will post the updated Terms here and
                  update the effective date above. Your continued use after
                  changes means you accept the new Terms.
                </p>
              </CardContent>
            </Card>

            <Card id="eligibility" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Eligibility
                </h2>
                <p>
                  You must be at least the age of majority in your jurisdiction
                  (or have parental consent, where permitted) to use our
                  website. Our services are offered to business customers;
                  consumer use may be limited.
                </p>
              </CardContent>
            </Card>

            <Card id="accounts" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Accounts & Security
                </h2>
                <p>
                  You are responsible for safeguarding your account credentials
                  and all activities under your account. Notify us immediately
                  of unauthorized use. We may suspend or terminate accounts for
                  suspected violations.
                </p>
              </CardContent>
            </Card>

            <Card id="use" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Acceptable Use
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Do not attempt to access or disrupt systems without
                    authorization
                  </li>
                  <li>
                    Do not upload unlawful, harmful, or infringing content
                  </li>
                  <li>
                    Do not reverse engineer, copy, resell, or misuse our
                    services except as permitted by law
                  </li>
                  <li>Comply with applicable laws and third‑party terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="services" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Services & Statements of Work
                </h2>
                <p>
                  For paid engagements, the scope, deliverables, timeline, and
                  fees will be defined in one or more Statements of Work
                  ("SOWs") or Order Forms that reference these Terms. If there
                  is a conflict, the SOW or Order Form controls for that
                  engagement.
                </p>
              </CardContent>
            </Card>

            <Card id="fees" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Fees & Payment
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Fees and payment schedules are set out in the applicable
                    SOW/Order Form
                  </li>
                  <li>
                    Invoices are due within the specified terms; late amounts
                    may accrue interest where permitted
                  </li>
                  <li>
                    Taxes are the customer’s responsibility unless otherwise
                    stated
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="ip" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Intellectual Property
                </h2>
                <p>
                  Except as provided in an SOW, we retain all rights in our
                  pre‑existing IP, tools, and methodologies. Upon full payment,
                  and subject to any third‑party licenses, we grant you rights
                  to use deliverables for your internal business purposes.
                </p>
              </CardContent>
            </Card>

            <Card id="confidentiality" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Confidentiality
                </h2>
                <p>
                  Each party may disclose confidential information to the other.
                  The receiving party will protect such information and use it
                  only for the intended purpose. Exclusions include information
                  that is public, independently developed, or rightfully
                  obtained from third parties.
                </p>
              </CardContent>
            </Card>

            <Card id="privacy" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Privacy
                </h2>
                <p>
                  Our{" "}
                  <Link href="/legal/privacy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  explains how we collect and use personal data. For processing
                  personal data on your behalf, our{" "}
                  <Link href="/legal/dpa" className="underline">
                    Data Processing Addendum
                  </Link>{" "}
                  applies.
                </p>
              </CardContent>
            </Card>

            <Card id="warranties" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Disclaimers & Warranties
                </h2>
                <p>
                  Except as expressly stated in an SOW, the website and services
                  are provided "as is" without warranties of any kind, express
                  or implied, including merchantability, fitness for a
                  particular purpose, and non‑infringement.
                </p>
              </CardContent>
            </Card>

            <Card id="liability" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, neither party will be
                  liable for indirect, incidental, special, consequential, or
                  punitive damages, or for lost profits or revenues. Except for
                  willful misconduct or amounts owed, each party’s aggregate
                  liability under these Terms will not exceed the amounts paid
                  in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card id="indemnity" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Indemnity
                </h2>
                <p>
                  Each party will defend and indemnify the other against
                  third‑party claims arising from its breach of these Terms,
                  violation of law, or infringement of intellectual property
                  rights, subject to prompt notice and cooperation.
                </p>
              </CardContent>
            </Card>

            <Card id="termination" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Term & Termination
                </h2>
                <p>
                  These Terms remain in effect until terminated. We may suspend
                  or terminate access for violations. Either party may terminate
                  for uncured material breach or as otherwise stated in an SOW.
                  Upon termination, your rights cease and you must stop using
                  the services.
                </p>
              </CardContent>
            </Card>

            <Card id="governing-law" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of Ghana, without regard
                  to conflict of laws. Disputes will be subject to the exclusive
                  jurisdiction of courts located in Accra, Ghana, unless
                  otherwise agreed in writing.
                </p>
              </CardContent>
            </Card>

            <Card id="contact" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Contact
                </h2>
                <p>
                  Questions? Contact us at{" "}
                  <a className="underline" href="mailto:legal@dimarak.com">
                    legal@dimarak.com
                  </a>{" "}
                  or via the{" "}
                  <Link className="underline" href="/contact">
                    Contact
                  </Link>{" "}
                  page.
                </p>
              </CardContent>
            </Card>

            <div className="text-xs text-muted-foreground">
              These Terms may be supplemented by SOWs or other written
              agreements between you and Dimarak.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
