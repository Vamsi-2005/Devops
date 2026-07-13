'use client'

import { motion } from 'framer-motion'
import { Cog, Infinity as InfinityIcon, Target, Zap, Mail, Phone, Building2 } from 'lucide-react'
import { Reveal, StaggerContainer, staggerItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    icon: Target,
    title: 'Project Purpose',
    text: 'Demonstrate a real-world CI/CD pipeline that ships website updates to production the moment code lands on GitHub.',
  },
  {
    icon: Cog,
    title: 'Objectives',
    text: 'Automate build, test, containerization, and deployment stages to remove manual, error-prone release steps.',
  },
  {
    icon: InfinityIcon,
    title: 'Why DevOps',
    text: 'DevOps bridges development and operations, enabling faster, more reliable, and repeatable software delivery.',
  },
  {
    icon: Zap,
    title: 'Why Automation',
    text: 'Automation guarantees consistency, reduces downtime, and lets developers focus on building features, not deploying them.',
  },
]

const teamMembers = [
  {
    name: 'Prachet Mylavarapu',
    college: 'KL University',
    registrationId: '2400099001',
    email: 'prachetm8@gmail.com',
    phone: '+91 9000344139',
  },
  {
    name: 'Bolisetty Pujitha',
    college: 'Vishnu Institute of Technology',
    registrationId: '24PA1A1232',
    email: '24pa1a1232@vishnu.edu.in',
    phone: '+91 8096607008',
  },
  {
    name: 'Mutchakarla Surya Prasanthi',
    college: 'SRKR Engineering College',
    registrationId: '24B91A0289',
    phone: '+91 9701381160',
  },
  {
    name: 'Muluguru Vamsi',
    college: 'Rayalaseema University College of Engineering',
    registrationId: '23RU1A0570',
    email: 'muluguruvamsi@gmail.com',
    phone: '+91 8121173597',
  },
  {
    name: 'Palepu Chayanand',
    college: 'BVC Engineering College',
    registrationId: '25225A0304',
    email: 'palepubalu024@gmail.com',
    phone: '+91 8247055263',
  },
  {
    name: 'Challa Rahul Ganesh',
    college: 'SRKR Engineering College',
    registrationId: '23B91A0438',
    email: 'rahulganesh.challa@gmail.com',
    phone: '+91 9701099299',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Project"
          title="A hands-on blueprint for modern software delivery"
          description="This project stitches together industry-standard DevOps tools into one seamless, automated deployment pipeline."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* left illustration */}
          <Reveal direction="right">
            <div className="glass glow relative overflow-hidden rounded-3xl p-8">
              <div className="grid-pattern absolute inset-0 opacity-40" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    pipeline.yml
                  </span>
                  <span className="text-xs text-muted-foreground">continuous delivery</span>
                </div>
                <div className="mt-5 space-y-3 font-mono text-sm">
                  {[
                    { k: 'trigger', v: 'on: push → main', d: 0 },
                    { k: 'build', v: 'docker build .', d: 0.1 },
                    { k: 'test', v: 'run test-suite', d: 0.2 },
                    { k: 'deploy', v: 'ssh → aws ec2', d: 0.3 },
                    { k: 'status', v: '✓ live in 30s', d: 0.4 },
                  ].map((line) => (
                    <motion.div
                      key={line.k}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: line.d, duration: 0.4 }}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-2.5"
                    >
                      <span className="text-primary">{line.k}:</span>
                      <span className="text-muted-foreground">{line.v}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* right cards */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </motion.div>
              )
            })}
          </StaggerContainer>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Meet the Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Passionate students who collaborated to design, develop, and deliver this project
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="size-4" />
                      {member.college}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      ID: {member.registrationId}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-border pt-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Mail className="size-4" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Phone className="size-4" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
