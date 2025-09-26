import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
        <section id="portfolio" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-left">
        {/* Main Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-800 mb-8 leading-tight" style={{ textDecoration: 'none' }}>
            TechVitta Garage
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <p className="text-2xl lg:text-3xl text-gray-600 mb-16 max-w-4xl leading-relaxed font-medium">
            A living portfolio of blockchain apps, community platforms,<br />
            and business tools we've built.
          </p>
        </motion.div>


      </div>


    </section>
  )
}

export default Hero
