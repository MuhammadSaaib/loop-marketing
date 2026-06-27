'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Github, href: 'https://github.com' },
    { icon: Mail, href: 'mailto:contact@loopmarketing.com' },
  ]

  return (
    <footer className="bg-secondary border-t border-accent-lightgrey py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-grotesk font-bold bg-gradient-to-r from-accent-darkgrey to-accent-grey bg-clip-text text-transparent">
              LOOP
            </div>
            <p className="text-text-muted text-sm mt-4">Growth systems for modern brands.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-grotesk font-bold text-text-primary mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-grotesk font-bold text-text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-primary hover:text-white hover:bg-accent-darkgrey hover:border-accent-darkgrey transition-all border border-accent-lightgrey"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent-lightgrey pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm">
          <p>&copy; 2024 LOOP MARKETING. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}