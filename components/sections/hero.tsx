'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CircleCheck, Cloud, Server } from 'lucide-react'
import { useRef } from 'react'
import { DockerIcon, GitHubIcon, JenkinsIcon } from '@/components/brand-icons'

const badges = ['CI/CD', 'Docker', 'Jenkins', 'AWS EC2', 'GitHub']

const pipeline = [
  { label: 'GitHub', icon: GitHubIcon, color: 'text-foreground' },
  { label: 'Jenkins', icon: JenkinsIcon, color: 'text-[#d33833]' },
  { label: 'Docker', icon: DockerIcon, color: 'text-[#2496ed]' },
  { label: 'AWS EC2', icon: Server, color: 'text-[#ff9900]' },
  { label: 'Live Website', icon: Cloud, color: 'text-primary' },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-pattern grid-fade absolute inset-0" />
        <motion.div
          style={{ y }}
          className="absolute -left-24 top-10 size-72 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          style={{ y }}
          className="absolute -right-20 top-40 size-80 rounded-full bg-sky/20 blur-[110px]"
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* left */}
        <motion.div style={{ opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            End-to-End DevOps CI/CD Pipeline
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Automatic Website Deployment using{' '}
            <span className="text-gradient">GitHub, Jenkins, Docker</span> &amp; AWS EC2
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Build a complete DevOps CI/CD pipeline that automatically deploys your website whenever
            code is pushed to GitHub — no manual steps, no downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#architecture"
              className="glow group inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              View Architecture
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Learn More
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* right — illustration */}
        <HeroIllustration />
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* pipeline card */}
      <div className="glass glow relative rounded-3xl p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-sky/70" />
            <span className="size-3 rounded-full bg-primary/70" />
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
            <CircleCheck className="size-3.5" />
            Deployment Successful
          </span>
        </div>

        <ul className="relative mt-5 space-y-3">
          {pipeline.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="relative flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-3"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-muted">
                  <Icon className={`size-5 ${step.color}`} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{step.label}</p>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-sky"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                    />
                  </div>
                </div>
                <CircleCheck className="size-4 text-primary" />
                {i < pipeline.length - 1 && (
                  <span className="absolute -bottom-3 left-8 h-3 w-px bg-border" />
                )}
              </motion.li>
            )
          })}
        </ul>
      </div>

      {/* floating icons */}
      <motion.div
        className="animate-float absolute -left-8 top-16 hidden rounded-2xl glass p-3 shadow-lg sm:block"
        style={{ animationDelay: '0.5s' }}
      >
        <GitHubIcon className="size-6" />
      </motion.div>
      <motion.div
        className="animate-float absolute -right-6 top-1/3 hidden rounded-2xl glass p-3 shadow-lg sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        <DockerIcon className="size-6 text-[#2496ed]" />
      </motion.div>
      <motion.div
        className="animate-float absolute -bottom-6 left-10 hidden rounded-2xl glass p-3 shadow-lg sm:block"
        style={{ animationDelay: '1s' }}
      >
        <Server className="size-6 text-[#ff9900]" />
      </motion.div>
    </motion.div>
  )
}
