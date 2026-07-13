'use client'

import { motion, useInView } from 'framer-motion'
import { Clock, GitBranch, Rocket, Server } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { StaggerContainer, staggerItem } from '@/components/reveal'

type Stat = {
  icon: typeof Rocket
  value: number
  suffix: string
  label: string
  decimals?: number
}

const stats: Stat[] = [
  { icon: Rocket, value: 100, suffix: '+', label: 'Projects Automated' },
  { icon: Clock, value: 30, suffix: 's', label: 'Deployment Time' },
  { icon: GitBranch, value: 100, suffix: '%', label: 'CI/CD Pipeline' },
  { icon: Server, value: 99.9, suffix: '%', label: 'Cloud Hosting Uptime', decimals: 1 },
]

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return <span ref={ref}>{display.toFixed(decimals)}</span>
}

export function Stats() {
  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </span>
                <p className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
