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
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 mt-16">
      {/* Top CTA */}
      <section className="container py-10">
        <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Let’s scope your project
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Share goals and constraints — we’ll propose the fastest path to
                value.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
              >
                Contact
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center rounded-md border border-border/60 bg-background px-4 py-2 text-sm"
              >
                See pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="container pb-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logos/mark.svg"
                alt="Logo"
                width={28}
                height={28}
              />
              <div className="text-base font-semibold">{brand.name}</div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {brand.boilerplateShort}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={brand.social.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              {brand.social.twitter && (
                <a
                  href={brand.social.twitter}
                  target="_blank"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {brand.social.github && (
                <a
                  href={brand.social.github}
                  target="_blank"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="text-xs text-muted-foreground space-y-1 pt-2">
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {brand.location}
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" /> {brand.phone}
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" /> {brand.email}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="text-sm font-semibold text-foreground/90">
                {group}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="hover:underline">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {year} {brand.name}. All rights reserved.
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
