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
import { Menu, ChevronDown, Phone, Mail } from "lucide-react";
import { brand } from "@/constants/brand";

const navPrimary = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
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
      className={
        "rounded-md px-3 py-2 text-sm font-medium hover:bg-accent/50 transition " +
        (active ? "bg-accent/50 text-foreground" : "text-muted-foreground")
      }
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 focus:z-50 focus:m-2 focus:rounded-md focus:bg-accent/40 focus:p-2"
      >
        Skip to content
      </a>
      <div className="container h-14 md:h-16 flex items-center justify-between gap-3">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            {/* Use light/dark wordmarks if available */}
            <span className="relative block h-6 w-auto">
              <Image
                src="/brand/logos/wordmark-dark.svg"
                alt={brand.name}
                width={120}
                height={24}
                className="hidden dark:block h-6 w-auto"
              />
              <Image
                src="/brand/logos/wordmark-light.svg"
                alt={brand.name}
                width={120}
                height={24}
                className="block dark:hidden h-6 w-auto"
              />
            </span>
            <span className="sr-only">{brand.name}</span>
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

        {/* Right: Actions */}
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
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src="/brand/logos/mark.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <div className="text-sm font-medium">{brand.name}</div>
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
                <div className="text-xs text-muted-foreground">
                  <div>{brand.phone}</div>
                  <div>{brand.email}</div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
