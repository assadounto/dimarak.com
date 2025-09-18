// =============================================================
// app/(marketing)/legal/privacy/page.tsx — Privacy Policy
// =============================================================
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy | Dimarak",
  description: "How Dimarak collects, uses, and protects your information.",
};

const EFFECTIVE_DATE = "September 17, 2025";

const sections = [
  { id: "scope", title: "Scope" },
  { id: "data-we-collect", title: "Information we collect" },
  { id: "use-of-data", title: "How we use information" },
  { id: "legal-bases", title: "Legal bases (GDPR)" },
  { id: "sharing", title: "Sharing & disclosure" },
  { id: "international", title: "International transfers" },
  { id: "retention", title: "Data retention" },
  { id: "security", title: "Security" },
  { id: "your-rights", title: "Your rights" },
  { id: "cookies", title: "Cookies" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact" },
];

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This policy describes how Dimarak ("we", "us") collects, uses, and
            protects information about you when you use our website and
            services.
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
            <Card id="scope" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Scope
                </h2>
                <p>
                  This policy applies to <strong>dimarak.com</strong>, related
                  subdomains, and any services where it is linked. It does not
                  apply to third‑party websites or services that we do not
                  control.
                </p>
              </CardContent>
            </Card>

            <Card id="data-we-collect" className="bg-card border-border">
              <CardContent className="p-6 space-y-4 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Information we collect
                </h2>
                <div>
                  <div className="font-medium text-card-foreground">
                    Information you provide
                  </div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>
                      Contact details (name, email, phone) and company
                      information
                    </li>
                    <li>
                      Project details you share via forms or during discovery
                      calls
                    </li>
                    <li>Billing and contract information (for customers)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Information we collect automatically
                  </div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>
                      Usage data (pages viewed, interactions) and device info
                      (browser, OS)
                    </li>
                    <li>Approximate location derived from IP address</li>
                    <li>Diagnostics, logs, and performance metrics</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Information from third parties
                  </div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>
                      CRM and support platforms, when you engage with us through
                      those tools
                    </li>
                    <li>
                      Partners and service providers who assist in delivering
                      our services
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card id="use-of-data" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  How we use information
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To provide and improve our website and services</li>
                  <li>
                    To respond to inquiries, proposals, and support requests
                  </li>
                  <li>
                    To operate analytics, security monitoring, and fraud
                    prevention
                  </li>
                  <li>
                    To comply with legal obligations and enforce agreements
                  </li>
                  <li>
                    With your consent, to send updates or marketing
                    communications (you may opt out)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="legal-bases" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Legal bases (GDPR)
                </h2>
                <p>
                  Where applicable, we process personal data under these legal
                  bases:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Contract</strong>: to perform a contract or take
                    steps at your request
                  </li>
                  <li>
                    <strong>Legitimate interests</strong>: to operate, secure,
                    and improve our services
                  </li>
                  <li>
                    <strong>Consent</strong>: for specific optional uses (e.g.,
                    marketing)
                  </li>
                  <li>
                    <strong>Legal obligation</strong>: to meet compliance or
                    regulatory requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="sharing" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Sharing & disclosure
                </h2>
                <p>
                  We do not sell your personal data. We may share information:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    With service providers who process data on our behalf under
                    contracts
                  </li>
                  <li>
                    With partners at your direction (e.g., integrations you
                    request)
                  </li>
                  <li>
                    To comply with laws, protect rights, or respond to lawful
                    requests
                  </li>
                  <li>
                    In connection with a corporate transaction, where permitted
                    by law
                  </li>
                </ul>
                <p>
                  See our{" "}
                  <Link href="/legal/subprocessors" className="underline">
                    Subprocessors
                  </Link>{" "}
                  page for key vendors.
                </p>
              </CardContent>
            </Card>

            <Card id="international" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  International transfers
                </h2>
                <p>
                  We may transfer and store information in countries outside
                  your own. Where required, we use appropriate safeguards (such
                  as standard contractual clauses) and align with your residency
                  needs per contract.
                </p>
              </CardContent>
            </Card>

            <Card id="retention" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Data retention
                </h2>
                <p>
                  We retain information only as long as necessary for the
                  purposes above, and as required by law. Retention periods vary
                  by data type and contractual obligations. We delete or
                  anonymize data when it is no longer needed.
                </p>
              </CardContent>
            </Card>

            <Card id="security" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Security
                </h2>
                <p>
                  We implement technical and organizational measures including
                  encryption in transit and at rest, access controls, audit
                  logging, monitoring, and incident response. Learn more on our{" "}
                  <Link href="/security" className="underline">
                    Security
                  </Link>{" "}
                  page.
                </p>
              </CardContent>
            </Card>

            <Card id="your-rights" className="bg-card border-border">
              <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Your rights
                </h2>
                <p>
                  Depending on your location, you may have rights to access,
                  correct, delete, or restrict processing of your personal data,
                  as well as data portability and the right to object. You also
                  have the right to withdraw consent at any time.
                </p>
                <div>
                  <div className="font-medium text-card-foreground">
                    GDPR (EEA/UK)
                  </div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>
                      Access, rectification, erasure, restriction, portability,
                      objection
                    </li>
                    <li>Complain to your local supervisory authority</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    CCPA/CPRA (California)
                  </div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>
                      Right to know, delete, correct, and opt out of certain
                      sharing
                    </li>
                    <li>
                      We do not sell personal information; we honor applicable
                      opt‑out rights
                    </li>
                  </ul>
                </div>
                <p>
                  To exercise rights, contact us at{" "}
                  <a className="underline" href="mailto:privacy@dimarak.com">
                    privacy@dimarak.com
                  </a>
                  . We may need to verify your identity before responding.
                </p>
              </CardContent>
            </Card>

            <Card id="cookies" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Cookies
                </h2>
                <p>
                  We use cookies and similar technologies for functionality,
                  analytics, and security. Manage your preferences and learn
                  more on our{" "}
                  <Link href="/legal/cookies" className="underline">
                    Cookies
                  </Link>{" "}
                  page.
                </p>
              </CardContent>
            </Card>

            <Card id="children" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Children
                </h2>
                <p>
                  Our website and services are not directed to children under 13
                  (or as defined by local law), and we do not knowingly collect
                  personal information from them.
                </p>
              </CardContent>
            </Card>

            <Card id="changes" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Changes to this policy
                </h2>
                <p>
                  We may update this policy to reflect changes to our practices
                  or for legal, technical, or regulatory reasons. We will post
                  the updated version here and update the effective date above.
                </p>
              </CardContent>
            </Card>

            <Card id="contact" className="bg-card border-border">
              <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Contact
                </h2>
                <p>
                  Dimarak Ltd. — Accra, Ghana. For questions about this policy
                  or our data practices, email{" "}
                  <a className="underline" href="mailto:privacy@dimarak.com">
                    privacy@dimarak.com
                  </a>{" "}
                  or visit our{" "}
                  <Link className="underline" href="/contact">
                    Contact
                  </Link>{" "}
                  page.
                </p>
              </CardContent>
            </Card>

            <div className="text-xs text-muted-foreground">
              This policy is for general informational purposes and does not
              create contractual obligations beyond those in our{" "}
              <Link href="/legal/terms" className="underline">
                Terms
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
