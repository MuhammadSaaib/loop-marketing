'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Instagram, Mail, Phone, ExternalLink } from 'lucide-react'
import Footer from '@/components/Footer'

const socials = [
  {
    name: 'Instagram',
    description: 'Follow our latest campaigns and creative work',
    icon: Instagram,
    url: 'https://www.instagram.com/loopmarketingpakistan?igsh=MTdvbTRlaXNhNTRuNA==',
    color: 'from-pink-500 to-purple-600',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with us for professional updates',
    icon: Mail,
    url: 'https://linkedin.com/company/loopmarketing',
    status: 'Coming Soon',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Email',
    description: 'Get in touch for inquiries and collaborations',
    icon: Mail,
    url: 'mailto:loopmarketingpakistan@gmail.com',
    color: 'from-red-500 to-orange-600',
  },
  {
    name: 'WhatsApp',
    description: 'Chat with us directly on WhatsApp',
    icon: Phone,
    url: 'https://wa.me/923361678800',
    color: 'from-green-500 to-green-600',
  },
]

export default function SocialsPage() {
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
              CONNECT
              <br />
              <span className="bg-gradient-to-r from-accent-darkgrey to-accent-grey bg-clip-text text-transparent">
                WITH US
              </span>
            </h1>
            <p className="text-xl text-text-muted">Follow our journey and stay updated with the latest campaigns and insights.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {socials.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.status ? '#' : social.url}
                  target={social.status ? undefined : '_blank'}
                  rel={social.status ? undefined : 'noopener noreferrer'}
                  onClick={(e) => social.status && e.preventDefault()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={!social.status ? { y: -8 } : {}}
                  className={`bg-gradient-to-br ${social.color} p-0.5 rounded-2xl group cursor-pointer`}
                >
                  <div className="bg-white rounded-2xl p-12 h-full flex flex-col justify-between hover:bg-gray-50 transition-all">
                    <div>
                      <Icon className="w-16 h-16 text-accent-darkgrey mb-4" />
                      <h3 className="text-3xl font-grotesk font-bold text-text-primary mb-2 group-hover:text-accent-darkgrey transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-text-muted text-lg">
                        {social.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-accent-darkgrey font-semibold mt-6">
                      {social.status ? (
                        <span className="text-sm">{social.status}</span>
                      ) : (
                        <>
                          <span>Visit</span>
                          <ExternalLink size={20} />
                        </>
                      )}
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 border border-accent-lightgrey text-center mb-16"
          >
            <h2 className="text-3xl font-grotesk font-bold text-text-primary mb-8">Quick Contact</h2>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a href="mailto:loopmarketingpakistan@gmail.com" className="flex items-center gap-3 text-text-primary hover:text-accent-darkgrey transition-colors">
                <Mail size={24} />
                <span>loopmarketingpakistan@gmail.com</span>
              </a>
              
              <div className="hidden md:block w-px h-12 bg-accent-lightgrey" />
              
              <a href="tel:+923361678800" className="flex items-center gap-3 text-text-primary hover:text-accent-darkgrey transition-colors">
                <Phone size={24} />
                <span>+92 336 1678800</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark">
                Send us a Message
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}