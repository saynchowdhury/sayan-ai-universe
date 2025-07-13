import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sayan's AI assistant. Ask me about his projects, skills, or collaboration opportunities!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    'projects': "Sayan's main focus areas include AI-powered SaaS solutions, creative AI tools, and 3D + AI integration. He's particularly excited about building educational platforms that make AI accessible to everyone.",
    'skills': "Sayan specializes in Machine Learning, Computer Vision, NLP, 3D Design with Blender, React & Three.js, Python & TensorFlow, and creative problem-solving. He's an AI generalist with a creative edge!",
    'collaboration': "Sayan is open to AI project collaborations, 3D + AI innovation, startup co-founding opportunities, and consulting roles. He's particularly interested in projects that blend technical innovation with creative expression.",
    'experience': "Sayan's journey started with AI fundamentals in 2020, evolved through deep learning exploration, and now focuses on creative fusion of AI with 3D design. He's building toward AI entrepreneurship.",
    'contact': "You can reach Sayan through the contact form on this page, or connect with him on GitHub, LinkedIn, or Twitter. He's always excited to discuss new ideas and potential collaborations!",
    'future': "Sayan envisions building AI-powered startups, creating educational platforms, contributing to applied AI research, and nurturing tech communities. His goal is to make AI more accessible and creative.",
    'philosophy': "Sayan believes that 'Innovation thrives at the intersection of technology and creativity.' He thinks AI should amplify human potential rather than replace creativity, and that great technology should feel like magic."
  };

  const generateResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseInput.includes(key)) {
        return response;
      }
    }

    // Keyword matching for more natural responses
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
      return "Hello! Great to meet you. I'm here to tell you all about Sayan's work in AI and creative technology. What would you like to know?";
    }
    
    if (lowercaseInput.includes('who') && lowercaseInput.includes('sayan')) {
      return "Sayan is an AI generalist and creative technologist passionate about building the future. He combines machine learning expertise with 3D design skills to create innovative solutions.";
    }

    if (lowercaseInput.includes('3d') || lowercaseInput.includes('design')) {
      return "Sayan has extensive experience in 3D design and is particularly excited about merging 3D workflows with AI. He uses tools like Blender and Three.js to create immersive digital experiences.";
    }

    if (lowercaseInput.includes('startup') || lowercaseInput.includes('entrepreneur')) {
      return "Sayan is building toward AI entrepreneurship! He's interested in co-founding startups that focus on AI-powered solutions, especially in creative and educational spaces.";
    }

    // Default response
    return "That's a great question! You can learn more about that by exploring the different sections of Sayan's portfolio, or feel free to reach out directly through the contact form. Is there anything specific about his AI projects or skills you'd like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-primary rounded-full shadow-neon hover:shadow-glow transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'hidden' : 'block'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle className="w-6 h-6 text-cosmic-dark" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96"
          >
            <Card className="w-full h-full bg-card/95 backdrop-blur-md border-neon-purple/50 shadow-cyber flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-cosmic-dark" />
                  </div>
                  <div>
                    <h3 className="font-futuristic font-semibold text-foreground">Sayan AI Assistant</h3>
                    <p className="text-xs text-muted-foreground">Always online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 text-sm font-futuristic ${
                        message.isBot
                          ? 'bg-muted/30 text-foreground'
                          : 'bg-gradient-primary text-cosmic-dark'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted/30 rounded-lg p-3 text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Sayan's work..."
                    className="flex-1 bg-muted/20 border-border focus:border-neon-purple font-futuristic"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-primary hover:shadow-neon text-cosmic-dark"
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;