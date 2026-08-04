import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './Sidebar';

const SITE_TITLE = 'Anhangá Tech';
const SITE_TAGLINE = 'Automação de Negócios';
const BASE_URL = 'https://anhanga.tech';

const RouteMeta: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const current = NAV_ITEMS.find(item => item.href === location.pathname);
    document.title = current && current.href !== '/'
      ? `${current.label} | ${SITE_TITLE}`
      : `${SITE_TITLE} | ${SITE_TAGLINE}`;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${location.pathname}`;
  }, [location.pathname]);

  return null;
};

export default RouteMeta;
