import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './BrandIcons';
import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/', implemented: true },
  { label: 'Atendente IA', href: '/atendente-ia' },
  { label: 'Agendamento', href: '/agendamento' },
  { label: 'Painel', href: '/painel' },
  { label: 'Preços', href: '/precos' },
  { label: 'Consultoria', href: '/consultoria' },
  { label: 'Materiais', href: '/materiais' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const nav = navRef.current;
    const focusableSelector = 'a[href], button:not([disabled])';
    const firstFocusable = nav?.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !nav) return;

      const focusable = Array.from(nav.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-12 md:w-16 bg-anhanga-dark text-white flex flex-col items-center justify-between py-8 z-50 border-r border-stone-800">
        <div className="flex flex-col gap-8 items-center">
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} />
          </button>
          <div className="flex flex-col gap-6 text-stone-400">
            <a href="#" className="p-3 hover:text-anhanga-lime transition-colors hover:bg-stone-800 rounded-lg" aria-label="Instagram"><InstagramIcon size={20} /></a>
            <a href="#" className="p-3 hover:text-anhanga-lime transition-colors hover:bg-stone-800 rounded-lg" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href="#" className="p-3 hover:text-anhanga-lime transition-colors hover:bg-stone-800 rounded-lg" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          {/* Rotated Logo Container */}
          {/* We use origin-left to anchor the start of the logo to the bottom area and rotate it upwards */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="absolute bottom-32 left-1/2 -translate-y-1/2 origin-left -rotate-90 w-32 md:w-48 block rounded"
          >
            <img
               src="https://i.postimg.cc/ZqZDHWR8/6.png"
               alt="Anhangá Tech"
               className="w-full max-w-none object-contain hover:opacity-80 hover:scale-110 transition-all duration-300 cursor-pointer select-none"
            />
          </Link>
        </div>

        <div className="text-[10px] font-mono text-stone-500 mb-2">
          ©{new Date().getFullYear()}
        </div>
      </aside>

      {/* Navigation Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav
            ref={navRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="relative w-full max-w-sm bg-anhanga-dark text-white h-full ml-12 md:ml-16 p-8 md:p-10 flex flex-col border-r border-stone-800 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500">Navegação</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-stone-800 rounded-lg transition-colors"
                aria-label="Fechar menu de navegação"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 pb-8">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block font-display text-3xl md:text-4xl font-black uppercase tracking-tighter py-2 transition-colors ${
                        isActive ? 'text-anhanga-lime' : 'text-white hover:text-anhanga-lime'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
