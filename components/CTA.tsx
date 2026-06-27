'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-primary" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl md:text-7xl font-grotesk font-bold mb-6 tracking-tighter">
          READY TO BUILD YOUR
          <br />
          <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent">
            NEXT GROWTH LOOP?
          </span>
        </h2>

        <p className="text-xl text-text-muted mb-12 leading-relaxed">
          Tell us where you are. We'll help design where you go.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 glow-blue"
          >
            Start Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg glass border border-accent-cyan text-accent-cyan font-grotesk font-bold hover:bg-accent-cyan/10 transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}