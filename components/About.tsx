'use client'

import { motion, useTrail } from 'framer-motion'
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
  const trail = useTrail(stats.length, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
  })

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-6xl font-grotesk font-bold mb-6 tracking-tighter">
              SMALL TEAM.
              <br />
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
                GLOBAL
              </span>
              <br />
              AMBITION.
            </h2>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Loop Marketing was built on execution. Over four years, we refined systems that combine creativity, performance, and long-term growth.
            </p>

            <p className="text-lg text-text-muted leading-relaxed">
              Today we work selectively and aim to help brands scale globally.
            </p>
          </motion.div>

          {/* Right stats */}
          <motion.div className="grid grid-cols-2 gap-6">
            {trail.map((style, index) => (
              <motion.div
                key={index}
                style={style}
                className="glass rounded-2xl p-8 border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all"
              >
                <div className="text-4xl md:text-5xl font-grotesk font-bold text-accent-cyan mb-2">
                  <AnimatedCounter
                    target={stats[index].number}
                    suffix={stats[index].suffix}
                  />
                </div>
                <p className="text-text-muted text-sm">{stats[index].label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}