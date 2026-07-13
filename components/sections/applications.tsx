'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Building2,
  GraduationCap,
  LayoutGrid,
  Newspaper,
  Rocket,
  ShoppingCart,
  User,
} from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const apps = [
  { icon: User, title: 'Portfolio Website' },
  { icon: Briefcase, title: 'Business Website' },
  { icon: GraduationCap, title: 'Student Projects' },
  { icon: ShoppingCart, title: 'E-Commerce' },
  { icon: Newspaper, title: 'Blog' },
  { icon: Building2, title: 'Company Website' },
  { icon: Rocket, title: 'Startup Landing Page' },
  { icon: LayoutGrid, title: 'Web Applications' },
]

export function Applications() {
  return (
    <section id="applications" className="relative bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Applications"
          title="What you can deploy with this pipeline"
          description="The same automated workflow adapts to virtually any web project you build."
        />

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {apps.map((app) => {
            const Icon = app.icon
            return (
              <motion.div
                key={app.title}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-sky/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-sm font-semibold">{app.title}</h3>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
