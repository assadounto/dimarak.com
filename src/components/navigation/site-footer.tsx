// =============================================================
// components/site-footer.tsx — Enterprise footer with link columns
// =============================================================
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { brand } from "@/constants/brand";
import { Linkedin, Twitter, Github, MapPin, Mail, Phone } from "lucide-react";

const year = new Date().getFullYear();

const links = {
  Services: [
    { label: "All services", href: "/services" },
    { label: "Security review", href: "/security" },
    { label: "Pricing & SLAs", href: "/pricing" },
  ],
  Solutions: [
    { label: "MVP Sprint", href: "/solutions/mvp-sprint" },
    { label: "AI Upgrade", href: "/solutions/ai-upgrade" },
    {
      label: "Platform Modernization",
      href: "/solutions/platform-modernization",
    },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Press & Media Kit", href: "/press" },
  ],
  Legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "DPA", href: "/legal/dpa" },
    { label: "Subprocessors", href: "/legal/subprocessors" },
    { label: "Cookies", href: "/legal/cookies" },
  ],
} as const;

function ExtIconLink({
  href,
  label,
  children,
}: {
  href?: string | null;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-foreground transition"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  const siteName = brand?.name ?? "Brand";
  const phone = brand?.phone?.toString();
  const email = brand?.email?.toString();

  return (
    <footer className="border-t border-border/60 bg-muted/20 mt-16">
      {/* Top CTA */}
      <section aria-labelledby="footer-cta" className="container py-10">
        <div className="rounded-xl border border-border/60 bg-card p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h2 id="footer-cta" className="text-xl md:text-2xl font-semibold">
                Let’s scope your project
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Share goals and constraints — we’ll propose the fastest path to
                value.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-md border border-border/60 bg-background px-4 py-2 text-sm"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="container pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logos/mark.svg"
                alt={siteName}
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
              <div className="text-base font-semibold text-brand-gradient">
                {siteName}
              </div>
            </div>

            {brand?.boilerplateShort && (
              <p className="text-sm text-muted-foreground max-w-xs">
                {brand.boilerplateShort}
              </p>
            )}

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <ExtIconLink href={brand?.social?.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </ExtIconLink>
              <ExtIconLink href={brand?.social?.twitter} label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </ExtIconLink>
              <ExtIconLink href={brand?.social?.github} label="GitHub">
                <Github className="h-4 w-4" />
              </ExtIconLink>
            </div>

            {/* Contact block */}
            <div className="text-xs text-muted-foreground space-y-1 pt-2">
              {brand?.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{brand.location}</span>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" />
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <nav key={group} aria-label={group}>
              <div className="text-sm font-semibold text-foreground/90">
                {group}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="hover:text-foreground transition"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {year}{" "}
            <span className="text-brand-gradient font-medium">{siteName}</span>.
            All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <Link href="/legal/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/legal/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
