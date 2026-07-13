'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Cloud, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute"
            >
              <Settings className="size-14 text-primary/30" />
            </motion.div>
            <Cloud className="size-8 text-primary" />
          </div>
          <motion.p
            className="mt-6 font-heading text-lg font-semibold"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          >
            Auto<span className="text-primary">Deploy</span>
          </motion.p>
          <p className="mt-1 text-sm text-muted-foreground">Spinning up the pipeline…</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
