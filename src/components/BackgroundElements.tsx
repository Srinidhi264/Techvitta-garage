import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundElementsProps {
  scrollY: number;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({ scrollY }) => {
  return (
    <>
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.02}px)`
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-16 h-16 ${
                i % 3 === 0 ? 'bg-blue-500' : 
                i % 3 === 1 ? 'bg-purple-500' : 'bg-teal-500'
              } rounded-full blur-sm`}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BackgroundElements;