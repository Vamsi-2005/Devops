'use client'

import { motion } from 'framer-motion'
import { CircleCheck, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@autodeploy.dev', href: 'mailto:hello@autodeploy.dev' },
  { icon: GitHubIcon, label: 'GitHub', value: 'github.com/autodeploy', href: 'https://github.com' },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/autodeploy', href: 'https://linkedin.com' },
  { icon: MapPin, label: 'Location', value: 'Cloud-native, worldwide', href: undefined },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your pipeline"
          description="Questions about the project or DevOps in general? Send a message — we'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* form */}
          <Reveal direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Ada Lovelace"
                    className="input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ada@example.com"
                    className="input"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project inquiry"
                    className="input"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project…"
                    className="input resize-none"
                  />
                </Field>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow mt-6 flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-semibold"
              >
                {sent ? (
                  <>
                    <CircleCheck className="size-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>

          {/* info */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                const inner = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="truncate text-sm font-semibold">{info.value}</p>
                    </div>
                  </div>
                )
                return info.href ? (
                  <a key={info.label} href={info.href} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={info.label}>{inner}</div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
