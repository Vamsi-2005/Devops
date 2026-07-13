'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  ChartBar,
  Boxes,
  GitBranch,
  LayoutDashboard,
  SearchCode,
  TestTube,
  Workflow,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const items = [
  { icon: Boxes, title: 'Kubernetes', desc: 'Orchestrate containers at scale with self-healing.' },
  { icon: SearchCode, title: 'SonarQube', desc: 'Automated code quality and security scanning.' },
  { icon: Activity, title: 'Prometheus', desc: 'Collect real-time metrics from the pipeline.' },
  { icon: ChartBar, title: 'Grafana', desc: 'Visualize deployment and system health.' },
  { icon: TestTube, title: 'Automated Testing', desc: 'Run full test suites on every commit.' },
  { icon: Workflow, title: 'GitHub Actions', desc: 'Alternative cloud-native CI/CD workflows.' },
  { icon: GitBranch, title: 'Terraform', desc: 'Provision cloud infrastructure as code.' },
  { icon: LayoutDashboard, title: 'Monitoring Dashboard', desc: 'Unified view of every deployment.' },
]

export function Future() {
  return (
    <section id="future" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Future Enhancements"
          title="Where this pipeline goes next"
          description="A roadmap of powerful DevOps tools that extend the project toward enterprise-grade operations."
        />

        <div className="relative mt-16">
          {/* center line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-sky to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-8">
            {items.map((item, i) => {
              const Icon = item.icon
              const left = i % 2 === 0
              return (
                <li key={item.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className={`flex ${left ? 'md:justify-start' : 'md:justify-end'}`}
                  >
                    <div className="ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)]">
                      <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg">
                        <div className="flex items-center gap-3">
                          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="size-5" />
                          </span>
                          <h3 className="font-heading text-base font-semibold">{item.title}</h3>
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  {/* dot */}
                  <span className="absolute left-4 top-5 z-10 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-primary md:left-1/2">
                    <span className="size-1.5 rounded-full bg-primary-foreground" />
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
