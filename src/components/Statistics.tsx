import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Statistics: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    years: 0
  })

  const stats = [
    { key: 'projects', end: 50, suffix: '+', label: 'Projects Launched' },
    { key: 'clients', end: 25, suffix: '+', label: 'Happy Clients' },
    { key: 'satisfaction', end: 100, suffix: '%', label: 'Client Satisfaction' },
    { key: 'years', end: 5, suffix: '+', label: 'Years Experience' }
  ]

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      stats.forEach(stat => {
        let current = 0
        const increment = stat.end / steps
        
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.end) {
            current = stat.end
            clearInterval(timer)
          }
          
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }))
        }, stepDuration)
      })
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation in the Web3 space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 text-center border border-blue-200 hover:border-blue-400 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
              >
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Blockchain Networks", value: "12+", description: "Supported networks" },
            { title: "Smart Contracts", value: "200+", description: "Deployed contracts" },
            { title: "Team Members", value: "15+", description: "Expert developers" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{stat.title}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
