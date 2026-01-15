import React from 'react';
import { Bot, Zap, Database, BarChart3, Workflow } from 'lucide-react';

const Marquee: React.FC = () => {
  const content = [
    { text: "AUTOMAÇÃO", icon: Zap },
    { text: "INTELIGÊNCIA ARTIFICIAL", icon: Bot },
    { text: "DASHBOARDS", icon: BarChart3 },
    { text: "CRM", icon: Database },
    { text: "FLUXOS", icon: Workflow },
  ];

  // Repeat content to ensure it covers wide screens for the infinite scroll effect
  const items = [...content, ...content, ...content, ...content];

  return (
    <div className="w-full overflow-hidden border-y border-stone-800 bg-anhanga-lime py-5 mb-16 relative z-20">
      <div className="whitespace-nowrap animate-marquee flex items-center hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center mx-8 md:mx-12 group cursor-default select-none"
          >
            <span className="text-3xl md:text-5xl font-display font-bold uppercase text-anhanga-dark tracking-tight">
              {item.text}
            </span>
            <item.icon 
              className="ml-6 w-6 h-6 md:w-8 md:h-8 text-anhanga-dark/50 transition-all duration-500 group-hover:text-anhanga-dark group-hover:rotate-12 group-hover:scale-110" 
              strokeWidth={1.5}
            />
            <span className="ml-8 md:ml-12 text-anhanga-dark/20 text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;