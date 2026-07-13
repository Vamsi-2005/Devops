'use client'

import { Cloud, Heart, Mail, Settings } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Workflow', href: '#workflow' },
]

const resources = [
  { label: 'Tools', href: '#tools' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Applications', href: '#applications' },
  { label: 'Future Scope', href: '#future' },
]

const socials = [
  { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@autodeploy.dev', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-slate-300">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="relative flex size-9 items-center justify-center rounded-xl btn-gradient">
                <Cloud className="size-5 text-white" />
                <Settings className="absolute -bottom-1 -right-1 size-4 rounded-full bg-sky p-0.5 text-navy" />
              </span>
              <span className="font-heading text-lg font-bold text-white">
                Auto<span className="text-sky">Deploy</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              An end-to-end DevOps CI/CD pipeline for automatic website deployment using GitHub,
              Jenkins, Docker &amp; AWS EC2.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* resources */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              {resources.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* cta */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get Started
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Explore the full architecture and build your own automated pipeline.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AutoDeploy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="size-4 fill-red-500 text-red-500" /> for DevOps Learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
