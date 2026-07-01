'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'

const services = [
  {
    id: 1,
    title: 'SEO (Search Engine Optimization)',
    description: 'Increase your website\'s visibility on search engines and attract high-quality organic traffic. We optimize your website through keyword research, technical improvements, on-page SEO, and content strategies that help you rank higher and grow sustainably.',
    icon: '🔍',
  },
  {
    id: 2,
    title: 'SEM (Search Engine Marketing)',
    description: 'Reach customers instantly with targeted search advertising. We create, manage, and optimize Google Ads campaigns that maximize visibility, generate qualified leads, and deliver measurable return on investment.',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Social Media Management',
    description: 'Build a strong online presence with strategic social media management. We create engaging content, schedule posts, manage communities, and monitor performance across platforms to grow your audience and strengthen customer relationships.',
    icon: '📱',
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Bring your brand to life with impactful visual design. From social media creatives and marketing materials to brochures, banners, and digital assets, we design visuals that capture attention and communicate your message effectively.',
    icon: '🎨',
  },
  {
    id: 5,
    title: 'Branding & Brand Strategy',
    description: 'Create a memorable brand that stands out. We develop your brand identity, positioning, messaging, visual guidelines, and long-term strategy to establish credibility and build lasting connections with your audience.',
    icon: '⭐',
  },
  {
    id: 6,
    title: 'Website Design & Development',
    description: 'Your website is your digital storefront. We design and develop responsive, user-friendly, and high-performing websites that reflect your brand, enhance user experience, and convert visitors into customers.',
    icon: '💻',
  },
  {
    id: 7,
    title: 'Videography',
    description: 'Tell your story through professional video production. From promotional videos and product showcases to corporate shoots and event coverage, we produce high-quality visual content that engages and inspires.',
    icon: '🎬',
  },
  {
    id: 8,
    title: 'Video Editing',
    description: 'Transform raw footage into compelling content. Our editing services include color grading, motion graphics, transitions, sound design, subtitles, and platform-specific optimization for maximum impact.',
    icon: '✂️',
  },
  {
    id: 9,
    title: 'Ads Management',
    description: 'Maximize your advertising budget with expertly managed campaigns. We plan, launch, optimize, and monitor paid advertising across Google, Facebook, Instagram, LinkedIn, TikTok, and other platforms to drive measurable business growth.',
    icon: '📢',
  },
  {
    id: 10,
    title: 'Influencer Marketing',
    description: 'Expand your reach through authentic influencer partnerships. We identify the right creators, manage collaborations, and execute campaigns that increase brand awareness, engagement, and customer trust.',
    icon: '👥',
  },
  {
    id: 11,
    title: 'Market Research',
    description: 'Make informed business decisions with data-driven insights. We analyze your industry, competitors, target audience, and market trends to uncover opportunities and build effective marketing strategies.',
    icon: '📈',
  },
  {
    id: 12,
    title: 'Public Relations (PR)',
    description: 'Build and protect your brand\'s reputation through strategic public relations. We manage media outreach, press releases, brand communications, and reputation management to increase credibility and strengthen public perception.',
    icon: '📢',
  },
]

export default function ServicesPage() {
  return (
    <>
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
                SERVICES
              </span>
            </h1>
            <p className="text-xl text-text-muted">Comprehensive digital marketing solutions tailored to your business needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-8 border border-accent-lightgrey hover:border-text-primary transition-all group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-grotesk font-bold text-text-primary mb-4 group-hover:text-accent-darkgrey transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-text-muted mb-6">Ready to get started?</p>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}