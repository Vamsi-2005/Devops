'use client'

import { motion } from 'framer-motion'
import { Server } from 'lucide-react'
import {
  AwsIcon,
  DockerIcon,
  GitHubIcon,
  GitIcon,
  JenkinsIcon,
  VscodeIcon,
} from '@/components/brand-icons'
import { StaggerContainer, staggerItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const tools = [
  {
    name: 'Visual Studio Code',
    icon: VscodeIcon,
    color: 'text-[#2496ed]',
    desc: 'The code editor where the website is developed, debugged, and version-controlled.',
  },
  {
    name: 'Git',
    icon: GitIcon,
    color: 'text-[#f05133]',
    desc: 'Distributed version control tracking every change to the project source code.',
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
    color: 'text-foreground',
    desc: 'Remote repository hosting and the trigger source for the CI/CD pipeline.',
  },
  {
    name: 'Jenkins',
    icon: JenkinsIcon,
    color: 'text-[#d33833]',
    desc: 'Automation server that orchestrates build, test, and deployment jobs.',
  },
  {
    name: 'Docker',
    icon: DockerIcon,
    color: 'text-[#2496ed]',
    desc: 'Packages the website into a portable container image for consistent runs.',
  },
  {
    name: 'AWS EC2',
    icon: Server,
    color: 'text-[#ff9900]',
    desc: 'Scalable cloud compute where the containerized website is deployed and served.',
  },
]

export function Tools() {
  return (
    <section id="tools" className="relative bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tools Used"
          title="The DevOps toolchain powering the pipeline"
          description="Each tool plays a dedicated role in taking code from your editor to a live production server."
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.article
                key={tool.name}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-muted transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`size-7 ${tool.color}`} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{tool.name}</h3>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tool.desc}
                </p>
              </motion.article>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
