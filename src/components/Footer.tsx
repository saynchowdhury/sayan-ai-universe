import { motion } from 'framer-motion';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-space border-t border-neon-purple/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <h3 className="text-3xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent">
              SAYAN.AI
            </h3>
            <p className="text-muted-foreground font-futuristic max-w-md mx-auto">
              Designing the future with AI & imagination. 
              Building tomorrow's technology today.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 py-6">
            <div className="flex items-center space-x-2 text-neon-purple">
              <Code className="w-5 h-5" />
              <span className="font-futuristic text-sm">Built with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="font-futuristic text-sm">and</span>
              <Zap className="w-5 h-5 text-electric-blue" />
            </div>
          </div>

          {/* Copyright and Tech Stack */}
          <div className="border-t border-border pt-6 space-y-2">
            <p className="text-sm text-muted-foreground font-futuristic">
              © {currentYear} Sayan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-futuristic">
              Crafted with React • Three.js • Framer Motion • Tailwind CSS
            </p>
          </div>

          {/* Floating Glow Effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;