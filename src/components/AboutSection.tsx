import { motion } from 'framer-motion';
import { Brain, Rocket, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const timelineItems = [
    {
      year: "2020",
      title: "Discovery Phase",
      description: "First encounter with AI and machine learning fundamentals",
      icon: Brain
    },
    {
      year: "2021",
      title: "Deep Dive",
      description: "Immersed in neural networks, computer vision, and NLP",
      icon: Zap
    },
    {
      year: "2022",
      title: "Creative Fusion",
      description: "Combined AI with 3D design and creative technologies",
      icon: Target
    },
    {
      year: "2023+",
      title: "Future Vision",
      description: "Building the foundation for AI-powered entrepreneurship",
      icon: Rocket
    }
  ];

  const skills = [
    "Machine Learning & Deep Learning",
    "Computer Vision & NLP",
    "3D Design & Blender",
    "React & Three.js",
    "Python & TensorFlow",
    "Creative Problem Solving"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-cosmic-dark to-deep-space">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl font-futuristic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an AI generalist passionate about bridging the gap between cutting-edge technology 
            and creative expression. My journey spans from machine learning algorithms to 3D visual 
            experiences, always with an eye toward building the future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-cyber font-bold text-neon-cyan mb-8">Journey Timeline</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple transition-colors duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-neon transition-shadow duration-300">
                          <item.icon className="w-6 h-6 text-cosmic-dark" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-cyber font-bold text-electric-blue mb-1">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-futuristic font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-cyber font-bold text-neon-cyan mb-8">Core Expertise</h3>
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-muted/30 rounded-lg p-4 border border-border hover:border-electric-blue transition-all duration-300 hover:shadow-cyber">
                    <span className="font-futuristic text-foreground group-hover:text-electric-blue transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 border-neon-purple/30 backdrop-blur-sm">
                <h4 className="text-xl font-cyber font-bold text-neon-purple mb-4">My Philosophy</h4>
                <p className="text-foreground leading-relaxed font-futuristic">
                  "The future belongs to those who can seamlessly blend technical mastery with 
                  creative vision. I believe AI isn't just about algorithms—it's about crafting 
                  experiences that push the boundaries of what's possible."
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;