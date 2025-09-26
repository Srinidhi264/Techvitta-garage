import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const projects = [
  {
    id: 'trustdoc',
    title: 'TrustDoc.in',
    description: 'Decentralized document storage',
    position: [-3, 0, 0] as [number, number, number],
    color: '#4facfe'
  },
  {
    id: 'trustchainvault',
    title: 'TrustChainVault.in',
    description: 'Decentralized repository storage',
    position: [0, 0, 0] as [number, number, number],
    color: '#00f2fe'
  },
  {
    id: 'macroworkers',
    title: 'Macroworkers.com',
    description: 'Task marketplace for professionals',
    position: [3, 0, 0] as [number, number, number],
    color: '#667eea'
  },
  {
    id: 'macrostudents',
    title: 'Macrostudents.com',
    description: 'Students + Colleges platform',
    position: [-1.5, -2, 0] as [number, number, number],
    color: '#764ba2'
  },
  {
    id: 'blockchain-health',
    title: 'Blockchain Health Reports',
    description: 'Hospital management with blockchain',
    position: [1.5, -2, 0] as [number, number, number],
    color: '#4facfe'
  }
]

const ProjectShowcase: React.FC = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectBoard key={project.id} project={project} index={index} />
      ))}
    </>
  )
}

const ProjectBoard: React.FC<{
  project: typeof projects[0]
  index: number
}> = ({ project, index }) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={project.position}
      onClick={() => {
        console.log(`Clicked on ${project.title}`)
        // Handle project click
      }}
    >
      <boxGeometry args={[2, 1.5, 0.2]} />
      <meshStandardMaterial
        color={project.color}
        metalness={0.7}
        roughness={0.3}
        emissive={project.color}
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

export default ProjectShowcase
