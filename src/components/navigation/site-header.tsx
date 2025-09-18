// =============================================================
// components/site-header.tsx — Responsive header with mobile drawer
// =============================================================
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, Phone, Mail } from "lucide-react";
import { brand } from "@/constants/brand";

const navPrimary = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
];

const navSecondary = [
  { label: "About", href: "/about" },
  { label: "Security", href: "/security" },
  { label: "Legal", href: "/legal" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "rounded-md px-3 py-2 text-sm font-medium transition",
        "hover:bg-accent/50",
        active ? "bg-accent/50 text-foreground" : "text-muted-foreground",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const siteName = brand?.name ?? "Brand";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 focus:z-50 focus:m-2 focus:rounded-md focus:bg-accent/40 focus:p-2"
      >
        Skip to content
      </a>

      <div className="container h-14 md:h-16 flex items-center justify-between gap-3">
        {/* Left: Brand + Primary Nav */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2">
            {/* Bigger logo */}
            <span className="relative block h-8 w-auto md:h-9">
              <Image
                src="/logos/mark.svg"
                alt={siteName}
                width={120}
                height={36}
                priority
                className="h-full w-auto"
              />
            </span>
            {/* Visible brand name */}
            <span className="hidden sm:inline-block text-base md:text-lg font-semibold tracking-tight">
              {siteName}
            </span>
          </Link>

          <Separator orientation="vertical" className="mx-1 hidden md:block" />

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navPrimary.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right: Secondary Nav + Actions */}
        <div className="hidden md:flex items-center gap-2">
          <nav className="hidden lg:flex items-center" aria-label="Secondary">
            {navSecondary.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <ModeToggle />
          <Button asChild className="ml-1">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              {/* Drawer header with consistent logo + name */}
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src="/logos/mark.svg"
                  alt={siteName}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <div className="text-sm font-medium">{siteName}</div>
              </div>

              <Separator className="my-4" />

              <div className="grid gap-1">
                {navPrimary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 text-sm hover:bg-accent/40"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="grid gap-1">
                {navSecondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 text-sm hover:bg-accent/40"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/press"
                  className="rounded-md px-2 py-2 text-sm hover:bg-accent/40"
                >
                  Press Kit
                </Link>
              </div>

              <Separator className="my-4" />

              <div className="grid gap-2">
                <Button asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
                <div className="text-xs text-muted-foreground space-y-1">
                  {brand?.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      <span>{brand.phone}</span>
                    </div>
                  )}
                  {brand?.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      <span>{brand.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
