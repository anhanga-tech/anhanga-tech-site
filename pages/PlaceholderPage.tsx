import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Construction, SearchX } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  /** 'placeholder' (default): route exists but content is coming soon. 'not-found': URL doesn't match any route. */
  variant?: 'placeholder' | 'not-found';
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description, variant = 'placeholder' }) => {
  const isNotFound = variant === 'not-found';

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white rounded-3xl border border-stone-800 p-8 md:p-16 max-w-2xl w-full text-center shadow-sm">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-anhanga-lime flex items-center justify-center">
          {isNotFound ? <SearchX size={28} className="text-anhanga-dark" /> : <Construction size={28} className="text-anhanga-dark" />}
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-bold uppercase tracking-widest mb-6">
          {isNotFound ? '404' : 'Em construção'}
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-6 text-anhanga-dark">
          {title}
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          {description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-anhanga-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-stone-800 transition-colors group"
        >
          Voltar para o início
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;
