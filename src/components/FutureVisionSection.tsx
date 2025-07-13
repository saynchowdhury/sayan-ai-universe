import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface VisionNode {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  color: string;
}

const visionNodes: VisionNode[] = [
  {
    id: "ai-startup",
    title: "AI-Powered SaaS",
    description: "Building intelligent software solutions that revolutionize how businesses operate",
    position: [0, 2, 0],
    color: "#a855f7"
  },
  {
    id: "creative-ai",
    title: "Creative AI Tools",
    description: "Developing AI that enhances human creativity in design, art, and content creation",
    position: [-3, 0, 1],
    color: "#06b6d4"
  },
  {
    id: "3d-ai",
    title: "3D + AI Integration",
    description: "Merging 3D design workflows with AI to create immersive digital experiences",
    position: [3, 0, -1],
    color: "#3b82f6"
  },
  {
    id: "education-platform",
    title: "AI Education Platform",
    description: "Creating accessible learning platforms that teach AI concepts through interactive experiences",
    position: [0, -2, 1],
    color: "#f59e0b"
  },
  {
    id: "research-lab",
    title: "Applied AI Research",
    description: "Contributing to AI research focused on practical applications and ethical development",
    position: [-2, 1, -2],
    color: "#ef4444"
  },
  {
    id: "community",
    title: "Tech Community",
    description: "Building and nurturing communities of creators, developers, and AI enthusiasts",
    position: [2, -1, 2],
    color: "#10b981"
  }
];

function VisionNode({ node, isHovered, onHover, onLeave }: {
  node: VisionNode;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = node.position[1] + Math.sin(time + node.position[0]) * 0.1;
      
      if (hovered || isHovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          onHover();
        }}
        onPointerOut={() => {
          setHovered(false);
          onLeave();
        }}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered || isHovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Connection Lines */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 2]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.3} />
      </mesh>
      
      {/* Node Label */}
      <Text
        position={[0, -0.7, 0]}
        fontSize={0.15}
        color={node.color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/orbitron-regular.woff"
      >
        {node.title}
      </Text>
    </group>
  );
}

function VisionScene() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      
      {visionNodes.map((node) => (
        <VisionNode
          key={node.id}
          node={node}
          isHovered={hoveredNode === node.id}
          onHover={() => setHoveredNode(node.id)}
          onLeave={() => setHoveredNode(null)}
        />
      ))}
      
      <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1} />
    </>
  );
}

const FutureVisionSection = () => {
  const [selectedNode, setSelectedNode] = useState<VisionNode | null>(null);

  return (
    <section id="future-vision" className="py-20 px-4 bg-cosmic-dark relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Future Vision
          </h2>
          <p className="text-xl font-futuristic text-muted-foreground max-w-3xl mx-auto">
            Interactive map of future ventures and ideas. Hover over nodes to explore each vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 rounded-lg border border-neon-purple/30 backdrop-blur-sm">
              <Canvas camera={{ position: [0, 0, 6] }}>
                <VisionScene />
              </Canvas>
            </div>
            <div className="absolute bottom-4 left-4 text-sm text-muted-foreground font-futuristic">
              Click and drag to explore • Scroll to zoom
            </div>
          </motion.div>

          {/* Vision Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-cyber font-bold text-neon-cyan mb-8">
              Vision Nodes
            </h3>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {visionNodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-neon-purple transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedNode(node)}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-4 h-4 rounded-full mt-1 animate-pulse"
                      style={{ backgroundColor: node.color }}
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-futuristic font-semibold text-foreground mb-2">
                        {node.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Innovation Timeline */}
            <div className="mt-8 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-lg p-6 border border-neon-purple/30">
              <h4 className="text-xl font-cyber font-bold text-neon-purple mb-4">
                Innovation Timeline
              </h4>
              <div className="space-y-2 text-sm font-futuristic">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Short-term (1-2 years)</span>
                  <span className="text-electric-blue">AI Tools & Prototypes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Medium-term (3-5 years)</span>
                  <span className="text-neon-cyan">Startup Launch & Growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Long-term (5+ years)</span>
                  <span className="text-neon-purple">Industry Leadership</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;