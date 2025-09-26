import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  scrollY: number
}

const Navigation: React.FC<NavigationProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Portfolio', href: '#portfolio', icon: '💼' },
    { label: 'About', href: '#about', icon: 'ℹ️' },
    { label: 'Contact', href: '#contact', icon: '📧' }
  ]

  const isScrolled = scrollY > 50

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md border-b border-gray-300 shadow-sm' 
              : 'bg-transparent'
          }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group"
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-white font-bold text-xl">TV</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-bold text-xl group-hover:text-blue-600 transition-colors duration-300">
                TechVitta
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">
                Garage
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group rounded-lg hover:bg-blue-50"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium rounded-lg"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
