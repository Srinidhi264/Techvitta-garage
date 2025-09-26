import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
        <section id="portfolio" className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{ animationDelay: '4s' }}></div>
        
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
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-8"
          >
            <div className="inline-block">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 block">
                Welcome to
              </span>
              <h1 className="text-7xl lg:text-9xl font-black text-gray-900 leading-none" style={{ textDecoration: 'none' }}>
                TechVitta
                <span className="block text-6xl lg:text-8xl text-gray-600 mt-2">Garage</span>
              </h1>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mb-12"
          >
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl">
              A living portfolio of blockchain apps, community platforms,<br />
              and business tools we've built.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Projects
            </button>
            <button className="px-8 py-4 border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:border-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>


    </section>
  )
}

export default Hero
