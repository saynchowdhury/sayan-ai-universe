import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AIGeometry, ParticleField } from './AIHero3D';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cosmic">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <AIGeometry />
          <ParticleField />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Designing the Future
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-cyber font-bold bg-gradient-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            with AI & Imagination
          </motion.h2>

          {/* Typing Animation Subheading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="h-20 flex items-center justify-center"
          >
            <div className="text-xl md:text-2xl font-futuristic text-foreground font-light">
              <span className="border-r-2 border-neon-cyan animate-typing overflow-hidden whitespace-nowrap">
                I'm Sayan — AI generalist, creative technologist, future founder.
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <Button
              onClick={scrollToNext}
              variant="outline"
              size="lg"
              className="relative group bg-transparent border-2 border-neon-purple hover:bg-neon-purple hover:text-cosmic-dark transition-all duration-300 shadow-neon hover:shadow-glow text-lg font-futuristic px-8 py-6"
            >
              <span className="relative z-10">Explore My Universe</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-neon-cyan animate-float">
          <span className="text-sm font-futuristic mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple rounded-full opacity-20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue rounded-full opacity-20 blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;