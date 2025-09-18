
// =============================================
// constants/services.ts — Data source for services
// =============================================
'use client'

import type { LucideIcon } from 'lucide-react'
import { Rocket, Sparkles, Cpu, Users } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  summary: string
  Icon: LucideIcon
  highlights: string[]
  deliverables: string[]
  timeline: string[]
  process: { name: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'web-mobile',
    title: 'Web & Mobile Apps',
    summary: 'Design and build customer‑grade apps with Next.js, React Native (Expo), and secure Rails/Node APIs.',
    Icon: Rocket,
    highlights: [
      'Next.js storefronts & dashboards',
      'React Native apps (Expo EAS)',
      'Ruby on Rails / Node APIs',
      'CI/CD, analytics, observability',
    ],
    deliverables: [
      'Clickable prototypes & UI kit',
      'Production Next.js web app',
      'React Native mobile app (iOS/Android)',
      'Rails/Node API with auth & roles',
      'Infra as code + monitoring',
    ],
    timeline: ['Discovery (1–2w)', 'Design (2–3w)', 'Build (3–6w)', 'Launch (1w)', 'Scale (ongoing)'],
    process: [
      { name: 'Discover', desc: 'Stakeholder interviews, constraints, metrics' },
      { name: 'Design', desc: 'Flows, components, data contracts' },
      { name: 'Build', desc: 'Sprints, weekly demos, QA' },
    ],
    faqs: [
      { q: 'Do you handle App Store publishes?', a: 'Yes. We prepare builds, metadata, and guide approvals.' },
      { q: 'What analytics do you set up?', a: 'Mixpanel/GA4, error tracking, and dashboards based on your needs.' },
    ],
  },
  {
    slug: 'ai',
    title: 'AI Enablement',
    summary: 'Ship useful, safe AI features: RAG search, agents, automations, and guardrails.',
    Icon: Sparkles,
    highlights: ['Use‑case discovery', 'RAG/semantic search', 'Agents & automations', 'Safety + eval guardrails'],
    deliverables: [
      'LLM integration plan & threat model',
      'Retrieval data pipeline (embeddings/RAG)',
      'Feature/API implementation with tests',
      'Eval suite & monitoring dashboard',
    ],
    timeline: ['Discovery (1w)', 'Data & infra (1–2w)', 'Build (2–4w)', 'Hardening (1w)'],
    process: [
      { name: 'Discover', desc: 'Jobs to be done, ROI, risks' },
      { name: 'Prototype', desc: 'Narrow scope POC with evals' },
      { name: 'Harden', desc: 'Guardrails, logging, rollout' },
    ],
    faqs: [
      { q: 'Can you work with our data?', a: 'Yes. We fit your data sources and comply with your residency and access rules.' },
      { q: 'Which models do you use?', a: 'We’re model‑agnostic and pick per use‑case, budget, and latency.' },
    ],
  },
  {
    slug: 'iot',
    title: 'Hardware & IoT',
    summary: 'Prototype and pilot connected devices with sensors, firmware, cloud APIs, and dashboards.',
    Icon: Cpu,
    highlights: ['Sensor selection', 'Firmware + OTA', 'Cloud API & device registry', 'Admin/device dashboards'],
    deliverables: [
      'Bill of materials & schematics',
      'Firmware (ESP/Arduino) + OTA pipeline',
      'Telemetry ingestion & device API',
      'Operations dashboard & alerts',
    ],
    timeline: ['Discovery (1–2w)', 'Hardware (2–4w)', 'Cloud (2–4w)', 'Pilot (2–4w)'],
    process: [
      { name: 'Scope', desc: 'Select sensors & constraints' },
      { name: 'Build', desc: 'Firmware + cloud integration' },
      { name: 'Pilot', desc: 'Field test, refine, scale plan' },
    ],
    faqs: [
      { q: 'Do you handle certifications?', a: 'We advise on regulatory steps and can coordinate partners as needed.' },
      { q: 'Can we host on our cloud?', a: 'Yes. AWS, GCP, or Azure with VPC options.' },
    ],
  },
  {
    slug: 'brand-media',
    title: 'Brand & Product Media',
    summary: 'Tell the story: motion, product videos, launch assets, and design systems for your product.',
    Icon: Users,
    highlights: ['Product videos & motion', 'Brand & design systems', 'Websites & launch assets'],
    deliverables: [
      'Messaging & creative brief',
      'Brand kit & component library',
      'Launch website & media pack',
    ],
    timeline: ['Discovery (1w)', 'Design (2–3w)', 'Production (2–4w)'],
    process: [
      { name: 'Brief', desc: 'Audience, message, goals' },
      { name: 'Create', desc: 'Storyboard, assets, design' },
      { name: 'Ship', desc: 'Publish, measure, iterate' },
    ],
    faqs: [
      { q: 'Do you handle web hosting?', a: 'Yes, or we can hand off to your team with docs.' },
      { q: 'Can you localize assets?', a: 'We can export localized versions for your markets.' },
    ],
  },
]

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug)
