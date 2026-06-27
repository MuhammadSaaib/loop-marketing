'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'SEO',
    description: 'Build long-term discoverability and sustainable growth.',
  },
  {
    id: '02',
    title: 'SEM & Paid Ads',
    description: 'Acquire customers through strategic paid campaigns.',
  },
  {
    id: '03',
    title: 'Ads Management',
    description: 'Performance optimization and scaling.',
  },
  {
    id: '04',
    title: 'Video Production',
    description: 'Creative content designed for attention.',
  },
  {
    id: '05',
    title: 'Graphic Design',
    description: 'Visual identity and digital storytelling.',
  },
  {
    id: '06',
    title: 'Content Strategy',
    description: 'Messaging built for conversion.',
  },
  {
    id: '07',
    title: 'Analytics & Optimization',
    description: 'Measure → improve → scale.',
  },
]

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-primary relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-grotesk font-bold mb-4 tracking-tighter">
            WHAT WE
            <br />
            <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
              BUILD
            </span>
          </h2>
          <p className="text-xl text-text-muted">Every service designed to create momentum.</p>
        </motion.div>

        {/* Horizontal scrolling cards */}
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="flex-shrink-0 w-full sm:w-96"
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <motion.div
                className={`h-64 rounded-2xl glass p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
                  expandedId === service.id
                    ? 'ring-2 ring-accent-cyan bg-accent-cyan/10 glow-cyan'
                    : 'hover:bg-accent-cyan/5'
                }`}
                whileHover={{ y: -8 }}
              >
                <div>
                  <span className="text-sm font-grotesk text-accent-blue font-bold">{service.id}</span>
                  <h3 className="text-3xl font-grotesk font-bold mt-4 text-text-primary group-hover:text-accent-cyan transition-colors">
                    {service.title}
                  </h3>
                </div>

                <motion.p
                  className="text-text-muted text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedId === service.id ? 1 : 0.7 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <p className="text-center text-text-muted text-sm mt-8">
          ← Scroll to explore all services →
        </p>
      </div>
    </section>
  )
}