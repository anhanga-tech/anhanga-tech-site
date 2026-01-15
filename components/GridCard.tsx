import React from 'react';

interface GridCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const GridCard: React.FC<GridCardProps> = ({ children, className = '', dark = false }) => {
  return (
    <div className={`rounded-3xl border border-stone-800 overflow-hidden relative transition-transform hover:scale-[1.01] duration-300 ${dark ? 'bg-anhanga-dark text-white' : 'bg-white text-anhanga-dark'} ${className}`}>
      {children}
    </div>
  );
};

export default GridCard;