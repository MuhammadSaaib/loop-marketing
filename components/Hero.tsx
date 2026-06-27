'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-primary">
      <ParticleBackground />

      {/* Gradient background with parallax */}
      <div
        className="absolute inset-0 bg-gradient-hero opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          className="text-center max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-7xl md:text-9xl font-grotesk font-bold mb-6 tracking-tighter">
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                LOOP
              </span>
              <br />
              <span className="text-text-primary">MARKETING</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Growth systems designed for businesses that want more than impressions.
          </motion.p>

          {/* Service labels */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['SEO', 'PAID ADS', 'VIDEO', 'DESIGN', 'CONTENT'].map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan transition-all"
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
            <button className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 glow-blue">
              Explore Services
            </button>
            <button className="px-8 py-4 rounded-lg glass border border-accent-cyan text-accent-cyan font-grotesk font-bold hover:bg-accent-cyan/10 transition-all duration-300">
              Book Discovery Call
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-accent-cyan animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}