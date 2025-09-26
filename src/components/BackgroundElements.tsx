import React from 'react';

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
    </>
  );
};

export default BackgroundElements;