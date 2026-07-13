'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, PackageCheck, Rocket, Server } from 'lucide-react'
import { GitHubIcon, JenkinsIcon } from '@/components/brand-icons'
import { StaggerContainer, staggerItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  { icon: Code, title: 'Develop Website', desc: 'Build and refine the website locally in VS Code.' },
  { icon: GitHubIcon, title: 'Push Code to GitHub', desc: 'Commit and push changes to the main branch.' },
  { icon: JenkinsIcon, title: 'Jenkins Trigger', desc: 'A webhook automatically starts the Jenkins job.' },
  { icon: PackageCheck, title: 'Build Docker Image', desc: 'Jenkins builds a fresh, portable container image.' },
  { icon: Server, title: 'Deploy on AWS EC2', desc: 'The container is shipped and run on an EC2 instance.' },
  { icon: Cloud, title: 'Website Goes Live', desc: 'The updated site is served to users in seconds.' },
]

export function Workflow() {
  return (
    <section id="workflow" className="relative bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="Six automated steps from commit to live"
          description="Once configured, the entire release process runs without a single manual intervention."
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span className="absolute right-4 top-4 font-heading text-5xl font-extrabold text-primary/10 transition-colors group-hover:text-primary/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative flex size-12 items-center justify-center rounded-2xl btn-gradient shadow-md">
                  <Icon className="size-6 text-white" />
                </span>
                <p className="relative mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                  Step {i + 1}
                </p>
                <h3 className="relative mt-1 font-heading text-lg font-semibold">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
