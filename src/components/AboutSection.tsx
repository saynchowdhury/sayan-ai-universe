import { motion } from 'framer-motion';
import { Brain, Rocket, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
const AboutSection = () => {
  const timelineItems = [{
    year: "2020",
    title: "AI Awakening",
    description: "First glimpse into the transformative power of artificial intelligence and its potential",
    icon: Brain
  }, {
    year: "2021",
    title: "Deep Learning",
    description: "Immersed in neural networks, AGI research, and the philosophical implications of AI",
    icon: Zap
  }, {
    year: "2022",
    title: "Future Vision",
    description: "Developed deep conviction about AGI's role in humanity's next evolutionary leap",
    icon: Target
  }, {
    year: "2023+",
    title: "Building Tomorrow",
    description: "Actively working toward responsible AGI development and AI-human collaboration",
    icon: Rocket
  }];
  const skills = ["AGI Research & Development", "Machine Learning & Neural Networks", "AI Ethics & Safety", "Computer Vision & NLP", "3D Design & Immersive Tech", "Futuristic Product Design"];
  return <section id="about" className="py-20 px-4 bg-gradient-to-b from-cosmic-dark to-deep-space">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl font-futuristic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an AI enthusiast and futurist, deeply passionate about Artificial General Intelligence (AGI) 
            and its transformative potential. I support AI advancement while thinking critically about its 
            implications for humanity's future, bridging technical innovation with visionary thinking.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.1
      }} viewport={{
        once: true
      }} className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-neon-purple/30 hover:border-neon-purple transition-colors duration-300 shadow-neon">
              <img alt="Sayan Chowdhury - AI Enthusiast" src="/lovable-uploads/2633c48f-736a-4ef0-90d7-3e32b6aedcfd.png" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center border-2 border-cosmic-dark">
              <Brain className="w-6 h-6 text-cosmic-dark" />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-3xl font-cyber font-bold text-neon-cyan mb-8">Journey Timeline</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => <motion.div key={item.year} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="relative">
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
                </motion.div>)}
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <h3 className="text-3xl font-cyber font-bold text-neon-cyan mb-8">Core Expertise</h3>
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => <motion.div key={skill} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="group">
                  <div className="bg-muted/30 rounded-lg p-4 border border-border hover:border-electric-blue transition-all duration-300 hover:shadow-cyber">
                    <span className="font-futuristic text-foreground group-hover:text-electric-blue transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </motion.div>)}
            </div>

            {/* Philosophy Card */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }}>
              <Card className="p-6 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 border-neon-purple/30 backdrop-blur-sm">
                <h4 className="text-xl font-cyber font-bold text-neon-purple mb-4">AI & AGI Philosophy</h4>
                <p className="text-foreground leading-relaxed font-futuristic">
                  "I believe AGI will be humanity's greatest creation—not to replace us, but to amplify 
                  our potential. My mission is to contribute to AI development that's aligned with human 
                  values, ensuring we build a future where artificial intelligence serves as humanity's 
                  most powerful collaborative partner."
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;