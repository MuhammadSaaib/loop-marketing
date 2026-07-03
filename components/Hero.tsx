'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import LoopLogo from '@/components/LoopLogo'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary flex items-center justify-center">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 bg-gradient-dark opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-20">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <LoopLogo className="w-16 h-16 text-accent-yellow" />
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-grotesk font-light mb-8 tracking-tight">
              <span className="text-accent-yellow">LOOP</span>
              <br />
              <span className="text-white">MARKETING</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Growth systems designed for businesses that want more than impressions.
          </motion.p>

          {/* Service labels */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['SEO', 'SEM', 'SOCIAL', 'DESIGN', 'CONTENT'].map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-sm glass text-sm font-light text-accent-yellow border border-accent-yellow/20"
              >
                {service}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="px-8 py-3 rounded-sm bg-accent-yellow text-primary font-light hover:shadow-lg hover:shadow-accent-yellow/30 transition-all">
              Explore Services
            </button>
            <button className="px-8 py-3 rounded-sm glass border border-accent-yellow text-accent-yellow font-light hover:bg-accent-yellow/5 transition-all">
              Book Call
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-accent-yellow animate-bounce"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}