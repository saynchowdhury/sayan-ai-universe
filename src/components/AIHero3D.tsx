import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function AIGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.4;
      torusRef.current.rotation.z = time * 0.2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.5;
      sphereRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group>
      {/* Central AI Brain Sphere */}
      <Sphere ref={sphereRef} position={[0, 0, 0]} args={[1.2]} scale={1}>
        <meshStandardMaterial
          color="#a855f7"
          roughness={0.2}
          metalness={0.8}
          emissive="#a855f7"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Orbiting Geometric Elements */}
      <Box ref={meshRef} position={[3, 0, 0]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#06b6d4" wireframe />
      </Box>

      <Torus ref={torusRef} position={[-3, 1, 0]} args={[0.8, 0.3, 16, 100]}>
        <meshStandardMaterial color="#3b82f6" />
      </Torus>

      {/* Neural Network Connections */}
      <mesh position={[1.5, 1.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 3]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
      </mesh>

      <mesh position={[-1.5, -1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.02, 0.02, 3]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 100; // Reduced for better performance
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#a855f7"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export { AIGeometry, ParticleField };