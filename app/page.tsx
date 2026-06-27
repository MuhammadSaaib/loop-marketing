import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
}