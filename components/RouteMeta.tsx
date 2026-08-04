import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './Sidebar';

const SITE_TITLE = 'Anhangá Tech';
const SITE_TAGLINE = 'Automação de Negócios';
const BASE_URL = 'https://anhanga.tech';

// Routes match case-insensitively (React Router's default), so metadata
// lookup must normalize casing the same way or it misclassifies valid
// URLs like /Precos as unknown.
const normalizePath = (pathname: string): string => {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return trimmed.toLowerCase();
};

const getOrCreateMeta = (name: string): HTMLMetaElement => {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  return meta;
};

const getOrCreateCanonical = (): HTMLLinkElement => {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  return canonical;
};

const RouteMeta: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePath(location.pathname);
    const current = NAV_ITEMS.find(item => item.href === normalizedPath);
    const isKnownRoute = Boolean(current);
    const isIndexable = Boolean(current?.implemented);

    document.title = !isKnownRoute
      ? `Página não encontrada | ${SITE_TITLE}`
      : current!.href !== '/'
        ? `${current!.label} | ${SITE_TITLE}`
        : `${SITE_TITLE} | ${SITE_TAGLINE}`;

    // Unknown routes (soft 404s served by the SPA fallback) and routes that still
    // render PlaceholderPage must not self-canonicalize or be indexed as thin
    // "Em construção" landing pages — point crawlers back at the home page instead.
    getOrCreateMeta('robots').content = isIndexable ? 'index, follow' : 'noindex, follow';
    getOrCreateCanonical().href = isKnownRoute ? `${BASE_URL}${normalizedPath}` : BASE_URL;
  }, [location.pathname]);

  return null;
};

export default RouteMeta;
