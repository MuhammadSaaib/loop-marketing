'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-primary" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl md:text-7xl font-grotesk font-bold mb-6 tracking-tighter text-text-primary">
          READY TO BUILD YOUR
          <br />
          <span className="bg-gradient-to-r from-accent-darkgrey via-accent-grey to-accent-lightgrey bg-clip-text text-transparent">
            NEXT GROWTH LOOP?
          </span>
        </h2>

        <p className="text-xl text-text-muted mb-12 leading-relaxed">
          Tell us where you are. We'll help design where you go.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark"
            >
              Contact Us
            </motion.button>
          </Link>
          <Link href="/socials">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg glass border border-text-primary text-text-primary font-grotesk font-bold hover:bg-white transition-all duration-300"
            >
              Our Socials
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}