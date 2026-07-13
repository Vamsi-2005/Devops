import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'
import { Navbar } from '@/components/navbar'
import { BackToTop, ScrollProgress } from '@/components/scroll-ui'
import { About } from '@/components/sections/about'
import { Advantages } from '@/components/sections/advantages'
import { Applications } from '@/components/sections/applications'
import { Architecture } from '@/components/sections/architecture'
import { Contact } from '@/components/sections/contact'
import { Faq } from '@/components/sections/faq'
import { Future } from '@/components/sections/future'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Tools } from '@/components/sections/tools'
import { Workflow } from '@/components/sections/workflow'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Architecture />
        <Workflow />
        <Tools />
        <Advantages />
        <Applications />
        <Future />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
