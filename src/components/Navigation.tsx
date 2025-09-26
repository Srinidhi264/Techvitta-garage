import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  scrollY: number
}

const Navigation: React.FC<NavigationProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  const isScrolled = scrollY > 50

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Optimized */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img 
              src="/images/techvitta-logo-transparent.png" 
              alt="TechVitta Innovations Pvt Ltd Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium relative group cursor-pointer"
              >
                {item.label}
              </motion.a>
            ))}
          </div>


          {/* Mobile Menu Button - Animated Hamburger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -6
                }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                animate={{
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 6
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="block py-4 px-4 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 cursor-pointer touch-manipulation"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
