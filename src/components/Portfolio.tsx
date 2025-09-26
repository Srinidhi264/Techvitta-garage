import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories } from '../data/projects'

const Portfolio: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Explore our diverse portfolio of blockchain solutions, educational platforms, and community-driven applications
          </p>

          {/* Category Catalog */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16"
          >

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/portfolio/${category.id}`}
                        className="block glass border border-gray-200 hover:border-blue-400 transition-all duration-300 group shadow-md hover:shadow-lg"
                  >
                    <div className="p-6 text-center">
                      {/* Category Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 border border-blue-200 group-hover:bg-blue-200 transition-all duration-300">
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      
                      {/* Category Name */}
                      <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h4>
                      
                      {/* Category Description */}
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Project Count */}
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium">
                        {category.count} Project{category.count !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any category above to explore our projects in that specific area. 
            Each category contains detailed information about our work and achievements.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio
