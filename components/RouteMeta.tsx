import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './Sidebar';

const SITE_TITLE = 'Anhangá Tech';
const SITE_TAGLINE = 'Automação de Negócios';
const BASE_URL = 'https://anhanga.tech';

const normalizePath = (pathname: string): string =>
  pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

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
    const isKnownRoute = normalizedPath === '/' || Boolean(current);

    document.title = !isKnownRoute
      ? `Página não encontrada | ${SITE_TITLE}`
      : current && current.href !== '/'
        ? `${current.label} | ${SITE_TITLE}`
        : `${SITE_TITLE} | ${SITE_TAGLINE}`;

    // Unknown routes (soft 404s served by the SPA fallback) must not
    // self-canonicalize or be indexed — point crawlers back at the home page instead.
    getOrCreateMeta('robots').content = isKnownRoute ? 'index, follow' : 'noindex, follow';
    getOrCreateCanonical().href = isKnownRoute ? `${BASE_URL}${normalizedPath}` : BASE_URL;
  }, [location.pathname]);

  return null;
};

export default RouteMeta;
