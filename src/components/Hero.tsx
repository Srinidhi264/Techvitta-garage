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
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="inline-block relative">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              TechVitta Garage
            </motion.h1>
            {/* Decorative underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-center">
            A living portfolio of blockchain apps, community platforms,<br />
            and business tools we've built.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { icon: "🔗", title: "Blockchain Solutions", desc: "Decentralized applications" },
            { icon: "👥", title: "Community Platforms", desc: "Social & educational tools" },
            { icon: "💼", title: "Business Tools", desc: "Management & e-commerce" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
          <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
        </motion.div>


      </div>


    </section>
  )
}

export default Hero
