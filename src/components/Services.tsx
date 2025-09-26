import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
      icon: "🔗",
      features: ["Solidity Development", "Security Audits", "Gas Optimization", "Testing & Deployment"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "DeFi Solutions",
      description: "Decentralized finance protocols including DEXs, lending platforms, and yield farming",
      icon: "💰",
      features: ["DEX Development", "Lending Protocols", "Yield Farming", "Liquidity Pools"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "NFT Marketplaces",
      description: "Custom NFT platforms with minting, trading, and marketplace functionality",
      icon: "🎨",
      features: ["NFT Minting", "Marketplace UI", "Royalty Systems", "Metadata Management"],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Web3 Integration",
      description: "Seamless blockchain integration for existing applications and new projects",
      icon: "🌐",
      features: ["Wallet Integration", "API Development", "Frontend Development", "Backend Services"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic guidance on blockchain adoption and Web3 transformation",
      icon: "💡",
      features: ["Technical Architecture", "Token Economics", "Security Analysis", "Roadmap Planning"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Audit & Security",
      description: "Comprehensive security audits and penetration testing for smart contracts",
      icon: "🛡️",
      features: ["Code Audits", "Penetration Testing", "Security Reports", "Remediation Support"],
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive Web3 development services to bring your blockchain vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 245, 255, 0.1)"
              }}
              className="group"
            >
              <div className="glass p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-6 relative z-10"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass p-12 max-w-4xl mx-auto border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Web3 Journey?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your project and how we can help you build the next generation of decentralized applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-gray-700 font-semibold hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
