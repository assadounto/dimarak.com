// =============================================================
// app/(marketing)/legal/dpa/page.tsx — Data Processing Addendum
// =============================================================
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Data Processing Addendum (DPA) | Dimarak",
  description:
    "Standard data processing terms, GDPR/UK GDPR compliant with SCC references.",
};

const EFFECTIVE_DATE = "September 17, 2025";

const sections = [
  { id: "intro", title: "Introduction & Parties" },
  { id: "definitions", title: "Definitions" },
  { id: "roles", title: "Roles & Scope" },
  { id: "instructions", title: "Processor Instructions" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "subprocessors", title: "Subprocessors" },
  { id: "intl", title: "International Transfers" },
  { id: "security", title: "Security Measures" },
  { id: "breach", title: "Security Incidents" },
  { id: "dsr", title: "Data Subject Requests" },
  { id: "return-delete", title: "Return & Deletion" },
  { id: "audit", title: "Audits & Reports" },
  { id: "assist", title: "Assistance & Cooperation" },
  { id: "liability", title: "Liability" },
  { id: "term", title: "Term & Termination" },
  { id: "govlaw", title: "Governing Law" },
  { id: "annex", title: "Annexes" },
];

export default function DpaPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Data Processing Addendum (DPA)
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This DPA forms part of the Terms, Order Form, or SOW between Dimarak
            Ltd. ("Processor") and the customer ("Controller") where Dimarak
            processes personal data on the customer’s behalf. It reflects
            requirements under GDPR/UK GDPR and comparable laws.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            Effective: {EFFECTIVE_DATE}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/legal/DPA-Dimarak-v1.pdf" download>
                Download PDF
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/legal/DPA-Dimarak-v1.docx" download>
                Download DOCX
              </a>
            </Button>
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
            <Card id="intro" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Introduction & Parties
                </h2>
                <p>
                  This DPA is between <strong>Dimarak Ltd.</strong>, with its
                  principal place of business in Accra, Ghana (the "Processor"),
                  and the entity identified in the applicable Order Form or SOW
                  (the "Controller"). Capitalized terms not defined here have
                  the meaning given in the main agreement between the parties
                  (the "Agreement").
                </p>
              </CardContent>
            </Card>

            <Card id="definitions" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Definitions
                </h2>
                <p>
                  "<strong>Data Protection Laws</strong>" means laws applicable
                  to the processing of Personal Data, including GDPR and UK
                  GDPR. "<strong>Personal Data</strong>", "
                  <strong>Processing</strong>", "<strong>Controller</strong>",
                  and "<strong>Processor</strong>" have the meanings given in
                  GDPR.
                </p>
              </CardContent>
            </Card>

            <Card id="roles" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Roles & Scope
                </h2>
                <p>
                  The parties acknowledge that Controller determines the
                  purposes and means of processing Personal Data and Processor
                  processes Personal Data on behalf of Controller to provide the
                  services described in the Agreement and Annex A.
                </p>
              </CardContent>
            </Card>

            <Card id="instructions" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Processor Instructions
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Processor will process Personal Data only on documented
                    instructions from Controller, including transfers to a third
                    country or international organization, unless required by
                    law.
                  </li>
                  <li>
                    Processor will promptly inform Controller if, in its
                    opinion, an instruction infringes Data Protection Laws.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="confidentiality" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Confidentiality
                </h2>
                <p>
                  Processor ensures that persons authorized to process Personal
                  Data are bound by confidentiality obligations and receive
                  appropriate data protection training.
                </p>
              </CardContent>
            </Card>

            <Card id="subprocessors" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-3">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Subprocessors
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Controller authorizes Processor to engage Subprocessors for
                    the purposes described in Annex A.
                  </li>
                  <li>
                    Processor will impose data protection obligations on
                    Subprocessors equivalent to those in this DPA and remains
                    responsible for their performance.
                  </li>
                  <li>
                    Processor maintains a current list of Subprocessors at{" "}
                    <Link href="/legal/subprocessors" className="underline">
                      /legal/subprocessors
                    </Link>{" "}
                    and will provide notice of changes allowing Controller to
                    object on reasonable grounds.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="intl" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-3">
                <h2 className="text-lg font-semibold text-card-foreground">
                  International Transfers
                </h2>
                <p>
                  Where Processor transfers Personal Data outside the EEA/UK to
                  a country not recognized as providing an adequate level of
                  protection, the parties shall implement appropriate
                  safeguards, such as the EU Standard Contractual Clauses (SCCs)
                  and the UK International Data Transfer Addendum, as
                  applicable.
                </p>
                <p>
                  The SCCs (Module 2: Controller to Processor) are incorporated
                  by reference and will apply where required. Annexes to this
                  DPA provide the relevant details for the SCCs.
                </p>
              </CardContent>
            </Card>

            <Card id="security" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Security Measures
                </h2>
                <p>
                  Processor implements technical and organizational measures
                  appropriate to the risk, including measures described in Annex
                  D and on the
                  <Link href="/security" className="underline">
                    {" "}
                    Security
                  </Link>{" "}
                  page (e.g., encryption, access controls, logging, and incident
                  response).
                </p>
              </CardContent>
            </Card>

            <Card id="breach" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Security Incidents
                </h2>
                <p>
                  Processor will notify Controller without undue delay after
                  becoming aware of a Personal Data Breach and provide
                  information reasonably required for Controller to meet its
                  obligations, consistent with Annex D and Processor policies.
                </p>
              </CardContent>
            </Card>

            <Card id="dsr" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Data Subject Requests
                </h2>
                <p>
                  Taking into account the nature of processing, Processor will
                  assist Controller by appropriate technical and organizational
                  measures, insofar as possible, to fulfill obligations to
                  respond to requests for exercising data subjects’ rights.
                </p>
              </CardContent>
            </Card>

            <Card id="return-delete" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Return & Deletion
                </h2>
                <p>
                  At Controller’s choice, Processor will delete or return all
                  Personal Data after the end of the provision of services
                  relating to processing, and delete existing copies unless
                  applicable law requires storage.
                </p>
              </CardContent>
            </Card>

            <Card id="audit" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Audits & Reports
                </h2>
                <p>
                  Processor will make available information necessary to
                  demonstrate compliance and allow for audits by Controller or
                  an auditor mandated by Controller, subject to reasonable
                  scheduling, confidentiality, and fee arrangements.
                </p>
              </CardContent>
            </Card>

            <Card id="assist" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Assistance & Cooperation
                </h2>
                <p>
                  Processor will assist Controller with data protection impact
                  assessments, consultations with supervisory authorities, and
                  breach notifications, taking into account the nature of
                  processing and information available to Processor.
                </p>
              </CardContent>
            </Card>

            <Card id="liability" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Liability
                </h2>
                <p>
                  Liability is governed by the Agreement. Nothing in this DPA
                  increases either party’s liability beyond that agreed in the
                  Agreement.
                </p>
              </CardContent>
            </Card>

            <Card id="term" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Term & Termination
                </h2>
                <p>
                  This DPA remains in effect for the duration of the Agreement
                  and until Processor deletes or returns Personal Data per the
                  section above.
                </p>
              </CardContent>
            </Card>

            <Card id="govlaw" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Governing Law
                </h2>
                <p>
                  Unless otherwise specified in the Agreement, this DPA is
                  governed by the same law and jurisdiction as the Agreement.
                </p>
              </CardContent>
            </Card>

            <Card id="annex" className="bg-card border-border">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-4">
                <h2 className="text-lg font-semibold text-card-foreground">
                  Annexes
                </h2>
                <div>
                  <div className="font-medium text-card-foreground">
                    Annex A — Subject Matter & Duration
                  </div>
                  <p>
                    Services, processing purpose, duration: as described in the
                    applicable SOW/Order Form.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Annex B — Data Subjects & Categories of Data
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Data subjects: customer personnel, end‑users, vendors (as
                      applicable)
                    </li>
                    <li>
                      Categories: identifiers, contact details, usage and
                      telemetry data, support content
                    </li>
                    <li>
                      Special categories: not intended; if processed, only with
                      documented instruction
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Annex C — Processing Operations
                  </div>
                  <p>
                    Hosting, storage, retrieval, transmission, structuring, and
                    support operations to provide the services.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Annex D — Technical & Organizational Measures
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Access control (SSO/OIDC, RBAC), least‑privilege, and
                      logging
                    </li>
                    <li>
                      Encryption in transit and at rest; key management by cloud
                      provider
                    </li>
                    <li>
                      Network security and segmentation (VPC), vulnerability
                      management
                    </li>
                    <li>
                      Backup and recovery; incident response with post‑mortems
                    </li>
                    <li>Supplier risk management and security training</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Annex E — Subprocessors
                  </div>
                  <p>
                    See current list at{" "}
                    <Link href="/legal/subprocessors" className="underline">
                      /legal/subprocessors
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Annex F — Standard Contractual Clauses
                  </div>
                  <p>
                    Where required, the EU SCCs (Module 2) and the UK IDTA (as
                    applicable) are hereby incorporated by reference.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-xs text-muted-foreground">
              This DPA is a template for general informational purposes and does
              not constitute legal advice. Customers should review with counsel.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
