import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  scrollY: number
}

const Navigation: React.FC<NavigationProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' }
  ]

  const isScrolled = scrollY > 50

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/98 backdrop-blur-lg border-b border-gray-300 shadow-lg' 
              : 'bg-white/90 backdrop-blur-md'
          }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/images/techvitta-preview.jpg" 
              alt="TechVitta Logo" 
              className="h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
              >
                {item.label}
              </motion.a>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
