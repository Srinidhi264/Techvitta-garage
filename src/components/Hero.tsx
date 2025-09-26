import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
        <section id="portfolio" className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(107, 114, 128, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-8"
          >
            <div className="inline-block">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 block">
                Welcome to
              </span>
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none whitespace-nowrap" style={{ textDecoration: 'none' }}>
                TechVitta <span className="text-5xl lg:text-7xl text-gray-600">Garage</span>
              </h1>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mb-12"
          >
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto">
              A living portfolio of blockchain apps, community platforms,<br />
              and business tools we've built.
            </p>
          </motion.div>

        </div>
      </div>


    </section>
  )
}

export default Hero
