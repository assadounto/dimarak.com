// =============================================================
// app/(marketing)/press/page.tsx — Press & Media Kit
// =============================================================
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { brand, logos, palette } from "@/constants/brand";
import { Copy, Download } from "lucide-react";

function Copyable({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const [ok, setOk] = React.useState(false);
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setOk(true);
          setTimeout(() => setOk(false), 1600);
        } catch (e) {}
      }}
    >
      <Copy className="mr-2 h-4 w-4" /> {ok ? "Copied" : children}
    </Button>
  );
}

function Swatch({
  label,
  varName,
  note,
}: {
  label: string;
  varName: string;
  note?: string;
}) {
  return (
    <div className="rounded-md border border-border/60 overflow-hidden">
      <div
        className="h-16 w-full"
        style={{ backgroundColor: `hsl(var(${varName}))` }}
      />
      <div className="p-3 text-xs">
        <div className="font-medium text-card-foreground">{label}</div>
        <div className="text-muted-foreground">{varName}</div>
        {note ? <div className="mt-1 text-muted-foreground">{note}</div> : null}
      </div>
    </div>
  );
}

function LogoCard({
  title,
  bg,
  src,
  downloads,
}: {
  title: string;
  bg: "light" | "dark";
  src: string;
  downloads: { label: string; href: string }[];
}) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          {title}
          <Badge variant="secondary">{bg} bg</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border/60 overflow-hidden">
          <div
            className={
              bg === "dark"
                ? "bg-foreground/90 grid place-items-center p-10"
                : "bg-background grid place-items-center p-10"
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={title}
              className="h-10 md:h-12 object-contain"
            />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {downloads.map((d) => (
            <Button key={d.href} asChild size="sm" variant="outline">
              <a href={d.href} download>
                <Download className="mr-2 h-4 w-4" /> {d.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function PressPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Press & Media Kit
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Boilerplate, logos, colors, and founder bio for articles and
            announcements. For special requests, email{" "}
            <a className="underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/brand/dimarak-presskit.zip" download>
                Download full press kit
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resources">One‑pager</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Company boilerplate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-card-foreground whitespace-pre-wrap">
                {brand.boilerplate}
              </p>
              <div className="mt-4">
                <Copyable text={brand.boilerplate}>Copy boilerplate</Copyable>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Press contact</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>Name: {brand.name}</div>
              <div>
                Email:{" "}
                <a className="underline" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </div>
              <div>
                Phone:{" "}
                <a className="underline" href={`tel:${brand.phone}`}>
                  {brand.phone}
                </a>
              </div>
              <div>Location: Accra, Ghana</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Logos */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Logos</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use the wordmark when space allows. Use the mark for small sizes or
            social avatars. Keep clear space equal to the height of the “D”. Do
            not alter colors or proportions.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <LogoCard
              title="Wordmark"
              bg="light"
              src={logos.wordmark.light}
              downloads={[
                { label: "SVG", href: "/brand/logos/wordmark-light.svg" },
                { label: "PNG", href: "/brand/logos/wordmark-light.png" },
                { label: "PDF", href: "/brand/logos/wordmark.pdf" },
              ]}
            />
            <LogoCard
              title="Wordmark"
              bg="dark"
              src={logos.wordmark.dark}
              downloads={[
                { label: "SVG", href: "/brand/logos/wordmark-dark.svg" },
                { label: "PNG", href: "/brand/logos/wordmark-dark.png" },
              ]}
            />
            <LogoCard
              title="Mark"
              bg="light"
              src={logos.mark.light}
              downloads={[
                { label: "SVG", href: "/brand/logos/mark.svg" },
                { label: "PNG", href: "/brand/logos/mark.png" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Brand guidelines (colors, type, usage) */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Brand guidelines</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {palette.map((c) => (
                  <Swatch
                    key={c.label}
                    label={c.label}
                    varName={c.varName}
                    note={c.note}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Typography</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div className="text-card-foreground">Headings & body</div>
              <p>
                Use the site’s default{" "}
                <code className="rounded bg-muted px-1">font-sans</code> stack
                (Inter recommended). Maintain clear hierarchy and adequate
                line‑height.
              </p>
              <div className="text-card-foreground mt-3">Do / Don’t</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Do keep adequate white space around the logo and headlines.
                </li>
                <li>Do use token colors (primary/secondary) for emphasis.</li>
                <li>Don’t skew, recolor, or add outlines to the logo.</li>
                <li>
                  Don’t place light logo on light backgrounds or vice versa.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder bio & headshots */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Founder bio & headshots
          </h2>
          <div className="mt-6 grid md:grid-cols-[1fr,2fr] gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={brand.founder.image}
                      alt={brand.founder.name}
                    />
                    <AvatarFallback>{brand.founder.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-card-foreground">
                      {brand.founder.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {brand.founder.title}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline">
                        <a
                          href="/brand/headshots/founder-portrait.jpg"
                          download
                        >
                          Portrait JPG
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href="/brand/headshots/founder-square.jpg" download>
                          Square JPG
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground whitespace-pre-wrap">
                  {brand.founder.bio}
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-md border border-border/60 bg-card p-3">
                <div className="relative h-56 w-full overflow-hidden rounded">
                  <Image
                    src="/brand/headshots/founder-portrait.jpg"
                    alt="Founder portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a download href="/brand/headshots/founder-portrait.jpg">
                      JPG
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      download
                      href="/brand/headshots/founder-portrait-webp.webp"
                    >
                      WEBP
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-md border border-border/60 bg-card p-3">
                <div className="relative h-56 w-full overflow-hidden rounded">
                  <Image
                    src="/brand/headshots/founder-square.jpg"
                    alt="Founder square"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a download href="/brand/headshots/founder-square.jpg">
                      JPG
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      download
                      href="/brand/headshots/founder-square-webp.webp"
                    >
                      WEBP
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Press inquiries
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For interviews, quotes, or assets, email{" "}
                  <a className="underline" href={`mailto:${brand.email}`}>
                    {brand.email}
                  </a>
                  .
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button asChild>
                  <Link href="/resources">Download one‑pager</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// =============================================================
// constants/brand.ts — brand data (logos, colors, boilerplate)
// =============================================================
