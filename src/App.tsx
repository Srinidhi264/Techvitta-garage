import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import BackgroundElements from './components/BackgroundElements'
import CategoryPage from './components/CategoryPage'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <Routes>
        {/* Main Portfolio Page */}
            <Route path="/" element={
              <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
            {/* Background Elements */}
            <BackgroundElements scrollY={scrollY} />
            
            {/* Navigation */}
            <Navigation scrollY={scrollY} />
            
            {/* 3D Canvas for hero section */}
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              className="fixed top-0 left-0 w-full h-screen z-0"
            >
              <Suspense fallback={null}>
                <Environment preset="night" />
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <pointLight position={[0, 5, 0]} intensity={0.5} color="#00f5ff" />
              </Suspense>
            </Canvas>

            {/* Main Content */}
            <div className="relative z-10">
              <Hero />
              <About />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          </div>
        } />
        
        {/* Portfolio Category Pages */}
        <Route path="/portfolio" element={<CategoryPage />} />
        <Route path="/portfolio/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  )
}

export default App
