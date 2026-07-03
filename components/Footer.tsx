'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import LoopLogo from './LoopLogo'

export default function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
    { icon: Mail, href: '#' },
  ]

  return (
    <footer className="bg-primary border-t border-accent-yellow/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <LoopLogo className="w-6 h-6 text-accent-yellow" />
              <span className="text-2xl font-grotesk font-light text-accent-yellow">LOOP</span>
            </div>
            <p className="text-text-muted text-sm mt-4 font-light">Growth systems for modern brands.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-grotesk font-light text-text-primary mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent-yellow transition-colors text-sm font-light"
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
            <h4 className="font-grotesk font-light text-text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-sm glass flex items-center justify-center text-accent-yellow hover:text-white hover:border-accent-yellow transition-all border border-accent-yellow/20"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent-yellow/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm font-light">
          <p>&copy; 2024 LOOP MARKETING. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-yellow transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent-yellow transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
