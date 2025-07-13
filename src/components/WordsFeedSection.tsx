import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Clock, Hash } from 'lucide-react';

interface ThoughtCard {
  id: string;
  content: string;
  timestamp: string;
  tags: string[];
  mood: 'insight' | 'idea' | 'reflection' | 'vision';
}

const thoughtCards: ThoughtCard[] = [
  {
    id: "1",
    content: "The best AI doesn't just process data—it understands context, nuance, and the spaces between words.",
    timestamp: "2 hours ago",
    tags: ["AI", "philosophy", "understanding"],
    mood: "insight"
  },
  {
    id: "2",
    content: "Currently exploring neural style transfer for 3D environments. The possibilities for immersive art are endless.",
    timestamp: "5 hours ago",
    tags: ["3D", "neural-networks", "art"],
    mood: "idea"
  },
  {
    id: "3",
    content: "Every line of code is a choice. Every choice shapes the future. Choose wisely.",
    timestamp: "1 day ago",
    tags: ["programming", "responsibility", "future"],
    mood: "reflection"
  },
  {
    id: "4",
    content: "What if we could make AI collaboration feel as natural as having a conversation with a friend?",
    timestamp: "2 days ago",
    tags: ["UX", "AI", "human-computer-interaction"],
    mood: "vision"
  },
  {
    id: "5",
    content: "The intersection of creativity and logic is where the most interesting problems get solved.",
    timestamp: "3 days ago",
    tags: ["creativity", "logic", "problem-solving"],
    mood: "insight"
  },
  {
    id: "6",
    content: "Building my first autonomous 3D world generator. Teaching AI to dream in polygons and textures.",
    timestamp: "4 days ago",
    tags: ["generative-AI", "3D", "automation"],
    mood: "idea"
  },
  {
    id: "7",
    content: "The future isn't about humans vs AI. It's about humans + AI creating what neither could alone.",
    timestamp: "1 week ago",
    tags: ["collaboration", "future", "augmentation"],
    mood: "vision"
  },
  {
    id: "8",
    content: "Debugging is just another word for digital detective work. And I love a good mystery.",
    timestamp: "1 week ago",
    tags: ["debugging", "programming", "mindset"],
    mood: "reflection"
  }
];

const moodColors = {
  insight: "neon-purple",
  idea: "electric-blue", 
  reflection: "neon-cyan",
  vision: "text-amber-400"
};

const moodLabels = {
  insight: "💡 Insight",
  idea: "🚀 Idea",
  reflection: "🤔 Reflection",
  vision: "🔮 Vision"
};

const WordsFeedSection = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(thoughtCards.flatMap(card => card.tags)));
  
  const filteredCards = selectedTag 
    ? thoughtCards.filter(card => card.tags.includes(selectedTag))
    : thoughtCards;

  const displayedCards = filteredCards.slice(0, visibleCards);

  const loadMore = () => {
    setVisibleCards(prev => Math.min(prev + 3, filteredCards.length));
  };

  return (
    <section id="words-feed" className="py-20 px-4 bg-deep-space relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-cyan/5" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Raw Thoughts
          </h2>
          <p className="text-xl font-futuristic text-muted-foreground max-w-2xl mx-auto">
            Unfiltered insights from the intersection of AI, creativity, and building the future
          </p>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-futuristic transition-all duration-300 ${
                selectedTag === null
                  ? 'bg-neon-purple text-cosmic-dark shadow-neon'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-futuristic transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-neon-purple text-cosmic-dark shadow-neon'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Thought Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {displayedCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-neon-purple transition-all duration-300 hover:shadow-cyber transform hover:scale-105">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-futuristic text-${moodColors[card.mood]}`}>
                    {moodLabels[card.mood]}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground font-futuristic">
                    <Clock className="w-3 h-3 mr-1" />
                    {card.timestamp}
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed font-futuristic mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  "{card.content}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {card.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-muted/30 text-muted-foreground font-futuristic cursor-pointer hover:bg-electric-blue/20 hover:text-electric-blue transition-colors duration-300"
                      onClick={() => setSelectedTag(tag)}
                    >
                      <Hash className="w-2 h-2 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCards < filteredCards.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-transparent border-2 border-electric-blue text-electric-blue rounded-lg font-futuristic hover:bg-electric-blue hover:text-cosmic-dark transition-all duration-300 shadow-cyber hover:shadow-glow"
            >
              Load More Thoughts
            </button>
          </motion.div>
        )}

        {/* Real-time indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-full px-6 py-3 border border-neon-purple/30">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-sm font-futuristic text-foreground">
              Live feed • Thoughts update in real-time
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WordsFeedSection;