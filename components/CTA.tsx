'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-grotesk font-light mb-8 tracking-tight">
          READY TO BUILD YOUR
          <br />
          <span className="text-accent-yellow">NEXT GROWTH LOOP?</span>
        </h2>

        <p className="text-xl text-text-muted mb-12 leading-relaxed font-light">
          Tell us where you are. We'll help design where you go.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-sm bg-accent-yellow text-primary font-light hover:shadow-lg hover:shadow-accent-yellow/30 transition-all"
          >
            Start Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-sm glass border border-accent-yellow text-accent-yellow font-light hover:bg-accent-yellow/5 transition-all"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}