// =============================================================
// app/(marketing)/case-studies/page.tsx — Case Studies Index
// =============================================================
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  allCaseStudies,
  getIndustries,
  getServices,
} from "@/constants/case-studies";

export const metadata = {
  title: 'Case Studies | Dimarak',
  description: 'Selected projects and outcomes across industries.',
}

function qs(params: Record<string, string | undefined>) {
  const entries = Object.entries(params).filter(([, v]) => Boolean(v)) as [string, string][]
  const s = new URLSearchParams(entries)
  return s.toString() ? `?${s.toString()}` : ''
}

export default function CaseStudiesIndexPage({
  searchParams,
}: {
  searchParams: { industry?: string; service?: string }
}) {
  const industries = getIndustries()
  const services = getServices()

  const filtered = allCaseStudies.filter((c) => {
    const matchIndustry = searchParams.industry ? c.industry === searchParams.industry : true
    const matchService = searchParams.service ? c.services.includes(searchParams.service) : true
    return matchIndustry && matchService
  })

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Case Studies</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">Outcomes we care about: revenue lift, cost savings, risk reduction, and time‑to‑value.</p>

          {/* Filters */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Industry:</span>
              <Button asChild size="sm" variant={searchParams.industry ? 'outline' : 'default'}>
                <Link href={qs({ service: searchParams.service })}>All</Link>
              </Button>
              {industries.map((ind) => (
                <Button
                  key={ind}
                  asChild
                  size="sm"
                  variant={searchParams.industry === ind ? 'default' : 'outline'}
                >
                  <Link href={qs({ industry: ind, service: searchParams.service })}>{ind}</Link>
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Service:</span>
              <Button asChild size="sm" variant={searchParams.service ? 'outline' : 'default'}>
                <Link href={qs({ industry: searchParams.industry })}>All</Link>
              </Button>
              {services.map((svc) => (
                <Button
                  key={svc}
                  asChild
                  size="sm"
                  variant={searchParams.service === svc ? 'default' : 'outline'}
                >
                  <Link href={qs({ industry: searchParams.industry, service: svc })}>{svc}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`}>
              <Card className="bg-card border-border hover:bg-accent/20 transition">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{c.industry}</Badge>
                    <span className="text-xs text-muted-foreground">{c.timeframe}</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{c.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.metrics.slice(0, 2).map((m) => (
                      <span key={m.label} className="rounded-md border border-border/60 bg-background px-2 py-1 text-xs">
                        <span className="font-medium text-card-foreground">{m.value}</span> {m.label}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Have a similar project in mind?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Send us a brief — we’ll propose scope, timeline, and team.</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button asChild><Link href="/contact">Request a proposal</Link></Button>
                <Button variant="outline" asChild><Link href="/services">Explore services</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
