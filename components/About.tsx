'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { number: 4, suffix: '+', label: 'Years' },
  { number: 100, suffix: '+', label: 'Projects' },
  { number: 2, suffix: '', label: 'Founders' },
  { number: 1, suffix: '∞', label: 'Global Vision' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 30

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [target])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function About() {
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-24 md:py-32 px-4 bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-grotesk font-light mb-8 tracking-tight">
              SMALL TEAM.
              <br />
              <span className="text-accent-yellow">GLOBAL</span>
              <br />
              AMBITION.
            </h2>

            <p className="text-lg text-text-muted leading-relaxed mb-6 font-light">
              Loop Marketing was built on execution. Over four years, we refined systems that combine creativity, performance, and long-term growth.
            </p>

            <p className="text-lg text-text-muted leading-relaxed font-light">
              Today we work selectively and aim to help brands scale globally.
            </p>
          </motion.div>

          {/* Right stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-sm p-8 border border-accent-yellow/20"
              >
                <div className="text-4xl md:text-5xl font-grotesk font-light text-accent-yellow mb-2">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-text-muted text-sm font-light">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}