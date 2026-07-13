'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'What is DevOps?',
    a: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously.',
  },
  {
    q: 'What is CI/CD?',
    a: 'CI/CD stands for Continuous Integration and Continuous Deployment — an automated process that builds, tests, and deploys code changes reliably and frequently.',
  },
  {
    q: 'What is Docker?',
    a: 'Docker is a platform that packages applications and their dependencies into lightweight, portable containers that run consistently across any environment.',
  },
  {
    q: 'What is Jenkins?',
    a: 'Jenkins is an open-source automation server that orchestrates CI/CD pipelines, triggering builds, tests, and deployments automatically.',
  },
  {
    q: 'What is AWS EC2?',
    a: 'Amazon EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud where you can host and run your applications on demand.',
  },
  {
    q: 'What is a Docker Container?',
    a: 'A Docker container is a running instance of a Docker image — an isolated, self-contained environment that includes everything needed to run the application.',
  },
  {
    q: 'What is GitHub?',
    a: 'GitHub is a cloud-based platform for hosting Git repositories, enabling version control, collaboration, and integration with CI/CD tools.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative bg-muted/40 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers to the core DevOps concepts behind this project."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-heading text-base font-semibold">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? 'btn-gradient' : 'bg-muted text-foreground'
                      }`}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
