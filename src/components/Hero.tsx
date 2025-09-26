import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
        <section id="hero" className="relative pt-32 pb-16 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

      {/* Formal Animation Section */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-center"
        >
          {/* Animated Geometric Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 1.5 }}
            className="relative mb-12"
          >
            <div className="flex justify-center items-center space-x-8">
              {/* Left Geometric Shape */}
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.8 }}
                className="w-16 h-16 border-2 border-gray-300 transform rotate-45"
              />
              
              {/* Center Circle with Pulsing Ring */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-gray-500 rounded-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ 
                    duration: 2, 
                    delay: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                  className="absolute inset-0 border border-gray-300 rounded-full"
                />
              </div>
              
              {/* Right Geometric Shape */}
              <motion.div
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.8 }}
                className="w-16 h-16 border-2 border-gray-300 transform rotate-45"
              />
            </div>
          </motion.div>

          {/* Animated Text with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="space-y-6"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
              className="text-xl font-semibold text-gray-700 tracking-wide"
            >
              INNOVATION • INTEGRITY • IMPACT
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 3.3 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 3.8 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Animated Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.2 }}
            className="mt-12"
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.5 }}
              className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8"
            >
              Our Approach
            </motion.h4>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
              {[
                { step: "01", title: "Analyze", desc: "Understanding your business needs" },
                { step: "02", title: "Design", desc: "Creating tailored blockchain solutions" },
                { step: "03", title: "Develop", desc: "Building with precision and security" },
                { step: "04", title: "Deploy", desc: "Seamless integration and launch" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 4.8 + (index * 0.2)
                  }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 5 + (index * 0.2),
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 4
                    }}
                    className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 group-hover:border-gray-400 transition-all duration-300"
                  >
                    <span className="text-lg font-bold text-gray-700">{item.step}</span>
                  </motion.div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">{item.title}</h5>
                  <p className="text-xs text-gray-500 max-w-32 leading-tight">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Quote Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 5.5 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5.8 }}
              className="relative"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 6 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-300"
              />
              
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 6.5 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-300"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
