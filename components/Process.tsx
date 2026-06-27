'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const stages = [
  { title: 'Discover', description: 'Understand your goals and market position' },
  { title: 'Strategize', description: 'Build a data-driven growth strategy' },
  { title: 'Create', description: 'Develop creative assets and campaigns' },
  { title: 'Launch', description: 'Execute with precision and monitoring' },
  { title: 'Optimize', description: 'Test, analyze, and refine continuously' },
  { title: 'Scale', description: 'Amplify what works across channels' },
]

export default function Process() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-20 md:py-32 px-4 bg-primary relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-grotesk font-bold tracking-tighter mb-4">
            OUR
            <br />
            <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              LOOP
            </span>
          </h2>
          <p className="text-xl text-text-muted">How we build sustainable growth for your brand.</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < stages.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-accent-blue to-transparent opacity-20" />
              )}

              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                  expandedIndex === index
                    ? 'glass bg-accent-blue/10 border border-accent-blue/50 glow-blue'
                    : 'glass hover:bg-accent-blue/5 border border-accent-blue/20'
                }`}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-6">
                  {/* Number circle */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-grotesk font-bold text-lg transition-all ${
                      expandedIndex === index
                        ? 'bg-accent-blue text-primary'
                        : 'bg-accent-blue/20 text-accent-blue'
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-grotesk font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                      {stage.title}
                    </h3>
                    <motion.p
                      className="text-text-muted"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: expandedIndex === index ? 1 : 0.7,
                        height: 'auto',
                      }}
                    >
                      {stage.description}
                    </motion.p>
                  </div>

                  {/* Arrow */}
                  <div className="text-accent-blue text-2xl group-hover:translate-x-2 transition-transform">
                    {index < stages.length - 1 ? '↓' : '✓'}
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}