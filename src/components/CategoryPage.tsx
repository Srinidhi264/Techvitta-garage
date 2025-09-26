import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { projects, categories, Project } from '../data/projects'

const CategoryPage: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { category } = useParams<{ category: string }>()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const navigate = useNavigate()

  const handleBackToPortfolio = () => {
    navigate('/', { replace: true })
    // Scroll to portfolio section after navigation
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  const currentCategory = category ? categories.find(cat => cat.id === category) : categories.find(cat => cat.id === 'all')
  const categoryProjects = !category || category === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === category)

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <button 
            onClick={handleBackToPortfolio}
            className="text-cyan-400 hover:text-cyan-300"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    )
  }

  return (
        <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-300 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackToPortfolio}
              className="text-blue-600 hover:text-blue-700 flex items-center"
            >
              ← Back to Portfolio
            </button>
            <div className="text-gray-800 font-bold text-xl">
              {currentCategory.name}
            </div>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {currentCategory.description}
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 text-blue-700">
              {categoryProjects.length} Project{categoryProjects.length !== 1 ? 's' : ''}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
            layout
          >
            {categoryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  rotateY: 2,
                  boxShadow: "0 25px 50px rgba(0, 245, 255, 0.15)"
                }}
                className="group"
              >
                <div className="glass overflow-hidden border border-gray-300 hover:border-gray-500 transition-all duration-300 relative h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-40 overflow-hidden flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-100 backdrop-blur-sm text-gray-700 text-sm font-semibold border border-gray-300">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold border ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-700 border-green-300'
                          : project.status === 'Development'
                          ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                          : 'bg-blue-100 text-blue-700 border-blue-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-200 text-gray-700 text-xs border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                      {project.link !== "#" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.link, '_blank')}
                          className="px-4 py-3 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-all duration-300"
                        >
                          Visit
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedProject.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-300">
                      {selectedProject.category}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold border ${
                      selectedProject.status === 'Live' 
                        ? 'bg-green-100 text-green-700 border-green-300'
                        : selectedProject.status === 'Development'
                        ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                        : 'bg-blue-100 text-blue-700 border-blue-300'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-600 hover:text-gray-800 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Project Image */}
              <div className="relative h-32 mb-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-20`} />
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Description</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-green-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Launch Date */}
              {selectedProject.launchDate && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Launch Date</h4>
                  <p className="text-gray-600">{selectedProject.launchDate}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                {selectedProject.link !== "#" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedProject.link, '_blank')}
                    className="px-6 py-3 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-all duration-300"
                  >
                    Visit Project
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default CategoryPage
