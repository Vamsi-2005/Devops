'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Cloud, Menu, Moon, Settings, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GitHubIcon } from '@/components/brand-icons'
import { useTheme } from '@/components/theme-provider'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Tools', href: '#tools' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Applications', href: '#applications' },
  { label: 'Future Scope', href: '#future' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="relative flex size-9 items-center justify-center rounded-xl btn-gradient">
        <Cloud className="size-5 text-white" />
        <Settings className="absolute -bottom-1 -right-1 size-4 rounded-full bg-sky p-0.5 text-navy" />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">
        Auto<span className="text-primary">Deploy</span>
      </span>
    </a>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:bg-muted"
    >
      {theme === 'dark' ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium transition-colors hover:bg-muted sm:flex"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
          <a
            href="#architecture"
            className="glow hidden rounded-full btn-gradient px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.03] md:inline-block"
          >
            View Project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/60 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-t border-border xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
                <a
                  href="#architecture"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full btn-gradient px-4 py-2.5 text-center text-sm font-semibold"
                >
                  View Project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
