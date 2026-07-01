'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/mldezwky', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

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
              GET IN
              <br />
              <span className="bg-gradient-to-r from-accent-darkgrey to-accent-grey bg-clip-text text-transparent">
                TOUCH
              </span>
            </h1>
            <p className="text-xl text-text-muted">We're here to help. Reach out and let's start your growth journey.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-accent-lightgrey"
            >
              <Mail className="w-12 h-12 text-accent-darkgrey mb-4" />
              <h3 className="text-xl font-grotesk font-bold text-text-primary mb-2">Email</h3>
              <a href="mailto:loopmarketingpakistan@gmail.com" className="text-text-muted hover:text-accent-darkgrey transition-colors">
                loopmarketingpakistan@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 border border-accent-lightgrey"
            >
              <Phone className="w-12 h-12 text-accent-darkgrey mb-4" />
              <h3 className="text-xl font-grotesk font-bold text-text-primary mb-2">Phone</h3>
              <a href="tel:+923361678800" className="text-text-muted hover:text-accent-darkgrey transition-colors">
                +92 336 1678800
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-accent-lightgrey"
            >
              <MapPin className="w-12 h-12 text-accent-darkgrey mb-4" />
              <h3 className="text-xl font-grotesk font-bold text-text-primary mb-2">Location</h3>
              <p className="text-text-muted">
                Based in Pakistan<br />
                Serving Global Clients
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 border border-accent-lightgrey"
          >
            <h2 className="text-3xl font-grotesk font-bold text-text-primary mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-text-primary font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary bg-white"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-text-primary font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 XXX XXXXXXX"
                    className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary bg-white"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary bg-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-text-primary font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and goals..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary bg-white resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark"
              >
                Send Message
              </motion.button>

              {submitted && (
                <motion.p
                  className="mt-4 text-accent-darkgrey font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}