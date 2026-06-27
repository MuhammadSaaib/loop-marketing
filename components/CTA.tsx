'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    
    // Send email via Formspree (free service)
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
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-primary" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl md:text-7xl font-grotesk font-bold mb-6 tracking-tighter text-text-primary">
          READY TO BUILD YOUR
          <br />
          <span className="bg-gradient-to-r from-accent-darkgrey via-accent-grey to-accent-lightgrey bg-clip-text text-transparent">
            NEXT GROWTH LOOP?
          </span>
        </h2>

        <p className="text-xl text-text-muted mb-12 leading-relaxed">
          Tell us where you are. We'll help design where you go.
        </p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 mb-12 glass border border-accent-lightgrey"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary mb-6"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-accent-lightgrey focus:border-text-primary focus:outline-none text-text-primary mb-6 resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark"
          >
            Start Your Project
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
        </motion.form>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:contact@loopmarketing.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-cta text-white font-grotesk font-bold hover:shadow-lg hover:shadow-accent-darkgrey/50 transition-all duration-300 glow-dark"
          >
            Email Us
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg glass border border-text-primary text-text-primary font-grotesk font-bold hover:bg-white transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}