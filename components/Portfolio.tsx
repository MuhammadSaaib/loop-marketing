'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'E-Commerce Growth',
    results: ['+310% Growth', '8.2x ROAS', '2M+ Reach'],
  },
  {
    title: 'SaaS Launch Campaign',
    results: ['+520% Signups', '4.7x ROI', '1.2M Impressions'],
  },
  {
    title: 'Brand Repositioning',
    results: ['+180% Engagement', '15% Conversion Lift', '500K+ Reach'],
  },
  {
    title: 'Lead Generation',
    results: ['+420% Leads', '6.8x ROAS', '800K+ Reach'],
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 md:py-32 px-4 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-grotesk font-light tracking-tight mb-4">
            SELECTED
            <br />
            <span className="text-accent-yellow">WORK</span>
          </h2>
          <p className="text-lg text-text-muted font-light">Results that speak for themselves.</p>
        </motion.div>

        {/* Case study grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-secondary rounded-sm p-8 border border-accent-yellow/20 hover:border-accent-yellow/40 transition-all group cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-grotesk font-light text-text-primary mb-6 group-hover:text-accent-yellow transition-colors">
                  {study.title}
                </h3>
              </div>

              <div>
                <p className="text-sm text-text-muted mb-4 font-light">Results:</p>
                <div className="flex flex-wrap gap-3">
                  {study.results.map((result, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-sm bg-accent-yellow/10 text-accent-yellow text-sm font-light border border-accent-yellow/20"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View portfolio button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 rounded-sm bg-accent-yellow text-primary font-light hover:shadow-lg hover:shadow-accent-yellow/30 transition-all">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  )
}