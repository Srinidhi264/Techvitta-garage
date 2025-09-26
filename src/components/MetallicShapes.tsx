import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const MetallicShapes: React.FC = () => {
const shapes = [
  { 
    position: [6, 2, -3] as [number, number, number], 
    rotation: [0, 0, 0] as [number, number, number], 
    scale: [1.2, 1.2, 1.2] as [number, number, number],
    color: "#4facfe",
    geometry: "box"
  },
  { 
    position: [8, -1, -5] as [number, number, number], 
    rotation: [0, Math.PI / 4, 0] as [number, number, number], 
    scale: [0.8, 1.5, 0.8] as [number, number, number],
    color: "#764ba2",
    geometry: "box"
  },
  { 
    position: [4, 3, -4] as [number, number, number], 
    rotation: [Math.PI / 6, 0, Math.PI / 3] as [number, number, number], 
    scale: [1, 1, 1] as [number, number, number],
    color: "#667eea",
    geometry: "octahedron"
  },
  { 
    position: [7, -3, -6] as [number, number, number], 
    rotation: [0, Math.PI / 2, 0] as [number, number, number], 
    scale: [0.6, 0.6, 0.6] as [number, number, number],
    color: "#f093fb",
    geometry: "sphere"
  },
  { 
    position: [5, 1, -2] as [number, number, number], 
    rotation: [Math.PI / 4, Math.PI / 4, 0] as [number, number, number], 
    scale: [1.4, 0.8, 1.4] as [number, number, number],
    color: "#4facfe",
    geometry: "box"
  },
  { 
    position: [9, 0, -7] as [number, number, number], 
    rotation: [0, 0, Math.PI / 6] as [number, number, number], 
    scale: [0.9, 0.9, 0.9] as [number, number, number],
    color: "#667eea",
    geometry: "tetrahedron"
  }
]

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  )
}

const FloatingShape: React.FC<{
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  color: string
  geometry: string
}> = ({ position, rotation, scale, color, geometry }) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008
      meshRef.current.rotation.y += 0.012
      meshRef.current.rotation.z += 0.005
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.02
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.3 + position[1]) * 0.01
    }
  })

  const getGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[0.5, 16, 16]} />
      case 'octahedron':
        return <octahedronGeometry args={[0.6]} />
      case 'tetrahedron':
        return <tetrahedronGeometry args={[0.5]} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export default MetallicShapes
