'use client'

import { motion } from 'framer-motion'
import {
  DollarSign,
  Gauge,
  GraduationCap,
  Repeat,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const advantages = [
  { icon: Zap, title: 'Automation', desc: 'Eliminate repetitive manual deployment tasks.' },
  { icon: Gauge, title: 'Fast Deployment', desc: 'Ship updates to production in seconds.' },
  { icon: ShieldCheck, title: 'Reduced Errors', desc: 'Consistent, script-driven releases every time.' },
  { icon: Repeat, title: 'Consistency', desc: 'Identical environments across every deploy.' },
  { icon: RotateCcw, title: 'Easy Rollback', desc: 'Revert to a previous image instantly.' },
  { icon: GraduationCap, title: 'Beginner Friendly', desc: 'Great first DevOps project to learn CI/CD.' },
  { icon: DollarSign, title: 'Low Cost', desc: 'Runs on free tiers and open-source tooling.' },
  { icon: TrendingUp, title: 'Scalable', desc: 'Grows from a single site to full infrastructure.' },
]

export function Advantages() {
  return (
    <section id="advantages" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Advantages"
          title="Why an automated pipeline wins"
          description="Automating deployments delivers speed, reliability, and confidence for every release."
        />

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-lg sm:text-left"
              >
                <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground sm:mx-0">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
