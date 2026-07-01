'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Brand Launch',
    services: ['SEO', 'SEM', 'Graphic Design', 'Website Development'],
    growth: '+310% Sales Growth',
    results: '8.2x ROAS | 2M+ Reach | 50K+ Conversions',
    description: 'Complete digital transformation for an e-commerce store',
    color: 'from-accent-darkgrey to-accent-grey',
  },
  {
    id: 2,
    title: 'SaaS Product Launch',
    services: ['SEM', 'Social Media', 'Video Marketing', 'Influencer Marketing'],
    growth: '+520% User Signups',
    results: '4.7x ROI | 1.2M Impressions | 15K+ Sign-ups',
    description: 'Launch campaign for a new SaaS platform',
    color: 'from-accent-grey to-accent-lightgrey',
  },
  {
    id: 3,
    title: 'Brand Repositioning',
    services: ['Branding', 'Graphic Design', 'PR', 'Content Strategy'],
    growth: '+180% Engagement',
    results: '15% Conversion Lift | 500K+ Reach | 50K+ Followers',
    description: 'Strategic rebrand and market repositioning',
    color: 'from-accent-lightgrey to-accent-darkgrey',
  },
  {
    id: 4,
    title: 'Lead Generation Campaign',
    services: ['SEM', 'Ads Management', 'Market Research', 'Website Design'],
    growth: '+420% Leads',
    results: '6.8x ROAS | 800K+ Reach | 3K+ Qualified Leads',
    description: 'High-performance lead generation for B2B client',
    color: 'from-accent-grey to-accent-darkgrey',
  },
]

const ServiceBubble = ({ service }: { service: string }) => (
  <motion.span
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    className="px-3 py-1 rounded-full bg-accent-lightgrey text-text-primary text-xs font-medium border border-accent-grey/30"
  >
    {service}
  </motion.span>
)

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/" className="flex items-center gap-2 text-text-primary hover:text-accent-darkgrey transition-colors mb-6">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <h1 className="text-6xl md:text-7xl font-grotesk font-bold mb-4 tracking-tighter text-text-primary">
            OUR
            <br />
            <span className="bg-gradient-to-r from-accent-darkgrey to-accent-grey bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h1>
          <p className="text-xl text-text-muted">Strategic campaigns that deliver exceptional results.</p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              className={`bg-gradient-to-br ${project.color} p-0.5 rounded-2xl cursor-pointer group transition-all`}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white rounded-2xl p-8 transition-all">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-grotesk font-bold text-text-primary mb-2 group-hover:text-accent-darkgrey transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted">{project.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                    className="text-2xl text-accent-darkgrey flex-shrink-0"
                  >
                    ↓
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.services.map((service) => (
                    <ServiceBubble key={service} service={service} />
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm text-text-muted mb-2">Primary Growth Metric:</p>
                  <p className="text-3xl font-grotesk font-bold text-accent-darkgrey">
                    {project.growth}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedId === project.id ? 1 : 0,
                    height: expandedId === project.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-accent-lightgrey pt-6 mt-6">
                    <p className="text-sm text-text-muted mb-3">Complete Results:</p>
                    <p className="text-lg text-text-primary font-semibold leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass rounded-2xl p-12 border border-accent-lightgrey text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-grotesk font-bold text-text-primary mb-4">20+</h2>
          <p className="text-xl text-text-muted mb-8">More major clients successfully delivered</p>
          <p className="text-text-muted">...and more being added every month. Ready to be our next success story?</p>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <button className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark">
              Start Your Project
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}