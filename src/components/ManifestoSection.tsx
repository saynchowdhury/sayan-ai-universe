import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ManifestoSection = () => {
  const manifestoItems = [
    {
      statement: "Innovation thrives at the intersection of technology and creativity",
      thought: "The most groundbreaking solutions emerge when we dare to blend analytical precision with artistic vision. This fusion creates possibilities that neither domain could achieve alone."
    },
    {
      statement: "AI should amplify human potential, not replace human creativity",
      thought: "True AI advancement comes from building tools that enhance our natural abilities—making us more creative, more efficient, and more capable of solving complex challenges."
    },
    {
      statement: "The future is built by those who think beyond current limitations",
      thought: "Every major breakthrough started with someone willing to question the status quo and imagine what others deemed impossible. Vision precedes reality."
    },
    {
      statement: "Learning never stops; the moment you think you know everything, you become obsolete",
      thought: "In a rapidly evolving field like AI, adaptability and continuous learning aren't just advantages—they're survival skills. Curiosity is the ultimate competitive edge."
    },
    {
      statement: "Great technology should feel like magic, even when you understand the science",
      thought: "The best technological experiences seamlessly blend complexity with simplicity, creating solutions that feel intuitive and almost magical to users."
    },
    {
      statement: "Building the future requires both bold vision and meticulous execution",
      thought: "Dreams without execution remain fantasies, but execution without vision lacks purpose. Success lies in the balance between ambitious thinking and detailed implementation."
    }
  ];

  return (
    <section id="manifesto" className="py-20 px-4 bg-deep-space relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-electric-blue/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Mindset Manifesto
          </h2>
          <p className="text-xl font-futuristic text-muted-foreground max-w-3xl mx-auto">
            Core beliefs that guide my approach to technology, creativity, and building the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {manifestoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-neon-purple transition-all duration-300 hover:shadow-neon transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-cosmic-dark font-cyber font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-futuristic text-foreground leading-relaxed group-hover:text-neon-cyan transition-colors duration-300">
                          "{item.statement}"
                        </p>
                        <div className="mt-3 text-sm text-electric-blue font-futuristic opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          Click to explore this thought →
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-md border-neon-purple/50">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-cyber text-neon-purple">
                      Manifesto #{index + 1}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <blockquote className="text-lg font-futuristic text-foreground italic border-l-4 border-neon-cyan pl-4">
                      "{item.statement}"
                    </blockquote>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <h4 className="text-electric-blue font-futuristic font-semibold mb-2">My Perspective:</h4>
                      <p className="text-muted-foreground leading-relaxed font-futuristic">
                        {item.thought}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-lg p-8 border border-neon-purple/30 backdrop-blur-sm">
            <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-4">
              Ready to Build Tomorrow?
            </h3>
            <p className="text-lg font-futuristic text-foreground">
              These principles drive every project I undertake. Let's collaborate and turn visionary ideas into reality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;