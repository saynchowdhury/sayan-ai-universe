import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/saynchowdhury',
      color: 'hover:text-neon-purple',
      description: 'Open source AI projects and innovative code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sayan-chowdhury-b4ba6b35b/',
      color: 'hover:text-electric-blue',
      description: 'Professional network and AGI insights'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sayan@example.com',
      color: 'hover:text-amber-400',
      description: 'Direct email for AI collaborations and ventures'
    }
  ];

  const collaborationTypes = [
    {
      title: "AI Project Collaboration",
      description: "Joint ventures in machine learning, computer vision, or NLP projects",
      timeline: "2-6 months",
      commitment: "Part-time to Full-time"
    },
    {
      title: "3D + AI Innovation",
      description: "Exploring the intersection of 3D design and artificial intelligence",
      timeline: "1-4 months",
      commitment: "Project-based"
    },
    {
      title: "Startup Co-founding",
      description: "Building the next generation of AI-powered solutions together",
      timeline: "Long-term",
      commitment: "Full-time partnership"
    },
    {
      title: "Consulting & Mentorship",
      description: "Strategic guidance on AI implementation and technical direction",
      timeline: "Flexible",
      commitment: "Advisory role"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-cosmic relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Let's Build Tomorrow
          </h2>
          <p className="text-xl font-futuristic text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on the next breakthrough? Let's connect and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-neon-purple/30 hover:shadow-neon transition-shadow duration-300">
              <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-6">
                Start a Conversation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-futuristic text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-border focus:border-neon-purple transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-futuristic text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-border focus:border-neon-purple transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-futuristic text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-muted/20 border-border focus:border-neon-purple transition-colors duration-300"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-futuristic text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-muted/20 border-border focus:border-neon-purple transition-colors duration-300 min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 text-cosmic-dark font-futuristic"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-cosmic-dark border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Collaboration Types */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-neon-purple transition-all duration-300 ${link.color}`}
                  >
                    <div className="flex items-center space-x-3">
                      <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                      <div>
                        <div className="font-futuristic font-semibold text-foreground group-hover:text-current transition-colors duration-300">
                          {link.name}
                        </div>
                        <div className="text-xs text-muted-foreground font-futuristic">
                          {link.description}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Collaboration Types */}
            <div>
              <h3 className="text-2xl font-cyber font-bold text-neon-cyan mb-6">
                Collaboration Opportunities
              </h3>
              <div className="space-y-4">
                {collaborationTypes.map((collab, index) => (
                  <motion.div
                    key={collab.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-electric-blue transition-colors duration-300"
                  >
                    <h4 className="font-futuristic font-semibold text-foreground mb-2">
                      {collab.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {collab.description}
                    </p>
                    <div className="flex justify-between text-xs text-electric-blue font-futuristic">
                      <span>⏱️ {collab.timeline}</span>
                      <span>🤝 {collab.commitment}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calendar Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 border-neon-purple/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-neon-purple" />
                  <h4 className="text-xl font-cyber font-bold text-neon-purple">
                    Schedule a Call
                  </h4>
                </div>
                <p className="text-foreground leading-relaxed font-futuristic mb-4">
                  Ready for a deep dive conversation? Book a 30-minute call to discuss 
                  your project ideas and explore potential collaborations.
                </p>
                <Button
                  variant="outline"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cosmic-dark transition-all duration-300"
                >
                  Book Meeting
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-lg p-8 border border-neon-purple/30 backdrop-blur-sm">
            <h3 className="text-3xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
              "The future is built by those who dare to imagine it."
            </h3>
            <p className="text-lg font-futuristic text-foreground">
              Let's build tomorrow together. 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;