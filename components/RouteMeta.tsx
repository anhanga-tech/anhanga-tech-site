import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { siteCatalog } from '../site/siteCatalog';

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
    const metadata = siteCatalog.metadata(location.pathname);

    document.title = metadata.title;
    getOrCreateMeta('robots').content = metadata.robots;
    if (metadata.description) {
      getOrCreateMeta('description').content = metadata.description;
    } else {
      document.querySelector<HTMLMetaElement>('meta[name="description"]')?.remove();
    }
    getOrCreateCanonical().href = metadata.canonicalUrl;
  }, [location.pathname]);

  return null;
};

export default RouteMeta;
