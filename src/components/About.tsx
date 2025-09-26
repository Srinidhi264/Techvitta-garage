import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
        <section id="about" ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
              <div className="relative inline-block">
                <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
                  About <span className="text-blue-600">TechVitta</span>
                </h2>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At TechVitta, we're dedicated to demystifying blockchain technology. We focus on small case uses, ensuring that even the most sophisticated blockchain solutions are accessible and practical for everyday business applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission Statement */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
                <div className="glass p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                To make blockchain technology accessible to businesses of all sizes by focusing on practical, small-scale implementations that deliver real value without overwhelming complexity.
              </p>
            </div>

            <div className="glass p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                A world where blockchain technology is no longer intimidating but a practical tool that businesses can easily adopt to solve real problems and improve their operations.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Accessibility",
                description: "Making complex blockchain technology simple and approachable for everyday businesses",
                icon: "🚀"
              },
              {
                title: "Security",
                description: "Building with security-first principles and best practices",
                icon: "🔒"
              },
              {
                title: "Transparency",
                description: "Open development processes and clear communication",
                icon: "👁️"
              },
              {
                title: "Practicality",
                description: "Focusing on real-world business solutions that deliver immediate value",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
