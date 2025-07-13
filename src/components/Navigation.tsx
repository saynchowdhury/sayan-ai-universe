import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'manifesto', label: 'Manifesto' },
    { id: 'future-vision', label: 'Vision' },
    { id: 'words-feed', label: 'Thoughts' },
    { id: 'contact', label: 'Connect' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              SAYAN.AI
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navItems.slice(1).map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-futuristic transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-neon-purple'
                      : 'text-foreground hover:text-neon-cyan'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="bg-cosmic-dark/90 backdrop-blur-md border-b border-neon-purple/30">
          <div className="px-4 py-4 flex items-center justify-between">
            {/* Mobile Logo */}
            <div
              className="text-xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              SAYAN.AI
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-cosmic-dark/95 backdrop-blur-md border-b border-neon-purple/30"
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.slice(1).map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-2 rounded-lg font-futuristic transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-neon-purple bg-neon-purple/10'
                    : 'text-foreground hover:text-neon-cyan hover:bg-muted/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;