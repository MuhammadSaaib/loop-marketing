'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import LoopLogo from './LoopLogo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-accent-yellow/10">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <LoopLogo className="w-8 h-8 text-accent-yellow" />
          </motion.div>
          <span className="text-xl font-grotesk font-light text-accent-yellow group-hover:text-white transition-colors">
            LOOP
          </span>
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-text-muted hover:text-accent-yellow transition-colors text-sm font-light">
            Services
          </a>
          <a href="#portfolio" className="text-text-muted hover:text-accent-yellow transition-colors text-sm font-light">
            Portfolio
          </a>
          <a href="#about" className="text-text-muted hover:text-accent-yellow transition-colors text-sm font-light">
            About
          </a>
          <button className="px-6 py-2 rounded-sm bg-accent-yellow text-primary font-light text-sm hover:shadow-lg hover:shadow-accent-yellow/30 transition-all">
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden w-8 h-8 rounded-sm glass flex items-center justify-center text-accent-yellow border border-accent-yellow/20">
          <span className="text-lg">☰</span>
        </button>
      </nav>
    </header>
  )
}