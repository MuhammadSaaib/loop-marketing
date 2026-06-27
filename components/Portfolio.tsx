'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'E-Commerce Growth',
    results: ['+310% Growth', '8.2x ROAS', '2M+ Reach'],
    color: 'from-accent-darkgrey to-accent-grey',
  },
  {
    title: 'SaaS Launch Campaign',
    results: ['+520% Signups', '4.7x ROI', '1.2M Impressions'],
    color: 'from-accent-grey to-accent-lightgrey',
  },
  {
    title: 'Brand Repositioning',
    results: ['+180% Engagement', '15% Conversion Lift', '500K+ Reach'],
    color: 'from-accent-lightgrey to-accent-darkgrey',
  },
  {
    title: 'Lead Generation',
    results: ['+420% Leads', '6.8x ROAS', '800K+ Reach'],
    color: 'from-accent-grey to-accent-darkgrey',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-grey opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-lightgrey opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-grotesk font-bold tracking-tighter mb-4 text-text-primary">
            SELECTED
            <br />
            <span className="text-accent-darkgrey">WORK</span>
          </h2>
          <p className="text-xl text-text-muted">Results that speak for themselves.</p>
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
              className={`bg-gradient-to-br ${study.color} p-0.5 rounded-2xl cursor-pointer group`}
            >
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between hover:bg-gray-50 transition-all">
                <div>
                  <h3 className="text-2xl font-grotesk font-bold text-text-primary mb-4 group-hover:text-accent-darkgrey transition-all">
                    {study.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-text-muted mb-4">Results:</p>
                  <div className="flex flex-wrap gap-3">
                    {study.results.map((result, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-accent-lightgrey text-text-primary text-sm font-medium border border-accent-grey/30"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
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
          <button className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  )
}