'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Cloud, Code, Server, User } from 'lucide-react'
import { AwsIcon, DockerIcon, GitHubIcon, JenkinsIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'

const nodes = [
  { label: 'Developer', sub: 'Writes & commits code', icon: User, color: 'text-primary' },
  { label: 'VS Code', sub: 'Local development', icon: Code, color: 'text-[#2496ed]' },
  { label: 'GitHub', sub: 'Push to repository', icon: GitHubIcon, color: 'text-foreground' },
  { label: 'Jenkins', sub: 'Triggers CI/CD job', icon: JenkinsIcon, color: 'text-[#d33833]' },
  { label: 'Docker', sub: 'Builds container image', icon: DockerIcon, color: 'text-[#2496ed]' },
  { label: 'AWS EC2', sub: 'Runs the container', icon: Server, color: 'text-[#ff9900]' },
  { label: 'Live Website', sub: 'Served to users', icon: Cloud, color: 'text-primary' },
]

export function Architecture() {
  return (
    <section id="architecture" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-pattern grid-fade absolute inset-0 opacity-60" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="How code flows from commit to production"
          description="A single git push kicks off an automated chain that ends with a freshly deployed website."
        />

        <div className="mt-16">
          {/* desktop horizontal flow */}
          <div className="hidden items-stretch justify-between gap-2 lg:flex">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex flex-1 items-center">
                <FlowCard node={node} index={i} />
                {i < nodes.length - 1 && <Connector index={i} horizontal />}
              </div>
            ))}
          </div>

          {/* mobile vertical flow */}
          <div className="mx-auto flex max-w-sm flex-col items-center gap-0 lg:hidden">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex w-full flex-col items-center">
                <FlowCard node={node} index={i} />
                {i < nodes.length - 1 && <Connector index={i} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FlowCard({
  node,
  index,
}: {
  node: (typeof nodes)[number]
  index: number
}) {
  const Icon = node.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      whileHover={{ y: -5 }}
      className="glass w-full min-w-0 flex-1 rounded-2xl p-4 text-center shadow-sm"
    >
      <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-muted">
        <Icon className={`size-6 ${node.color}`} />
      </span>
      <p className="mt-3 text-sm font-semibold">{node.label}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{node.sub}</p>
    </motion.div>
  )
}

function Connector({ index, horizontal }: { index: number; horizontal?: boolean }) {
  if (horizontal) {
    return (
      <div className="flex shrink-0 items-center px-1" aria-hidden="true">
        <svg width="34" height="12" viewBox="0 0 34 12" fill="none">
          <motion.line
            x1="0"
            y1="6"
            x2="26"
            y2="6"
            stroke="var(--brand)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-dash"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          />
          <path d="M26 1l7 5-7 5" stroke="var(--brand)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="py-1.5"
      aria-hidden="true"
    >
      <ChevronDown className="size-5 text-primary" />
    </motion.div>
  )
}
