import React from 'react';
import { Menu, Instagram, Linkedin, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-12 md:w-16 bg-anhanga-dark text-white flex flex-col items-center justify-between py-8 z-50 border-r border-stone-800">
      <div className="flex flex-col gap-8 items-center">
        <button className="p-2 hover:bg-stone-800 rounded-lg transition-colors">
          <Menu size={24} />
        </button>
        <div className="flex flex-col gap-6 text-stone-400">
          <a href="#" className="p-3 hover:text-anhanga-lime transition-colors hover:bg-stone-800 rounded-lg" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="#" className="p-3 hover:text-anhanga-lime transition-colors hover:bg-stone-800 rounded-lg" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="#" className="p-3 hover:text-anhanga-lime transition-colors hover:bg-stone-800 rounded-lg" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        {/* Rotated Logo Container */}
        {/* We use origin-left to anchor the start of the logo to the bottom area and rotate it upwards */}
        <img 
           src="https://i.postimg.cc/ZqZDHWR8/6.png" 
           alt="Anhangá Tech" 
           className="absolute bottom-32 left-1/2 -translate-y-1/2 origin-left -rotate-90 w-32 md:w-48 max-w-none object-contain hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer select-none"
        />
      </div>
      
      <div className="text-[10px] font-mono text-stone-500 mb-2">
        ©{new Date().getFullYear()}
      </div>
    </aside>
  );
};

export default Sidebar;