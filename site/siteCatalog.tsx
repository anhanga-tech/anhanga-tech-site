import type { ReactElement } from 'react';
import Home from '../pages/Home';
import PlaceholderPage from '../pages/PlaceholderPage';

const SITE_TITLE = 'Anhangá Tech';
const SITE_TAGLINE = 'Automação de Negócios';
const BASE_URL = 'https://anhanga.tech';
const PLACEHOLDER_DESCRIPTION = 'Esta página está sendo construída. Em breve você encontrará aqui todo o conteúdo sobre este tema.';

type PublicationStatus = 'planned' | 'published';
type NavigationProjection = 'primary' | 'footer-quick' | 'footer-offers';

interface SitePage {
  path: string;
  label: string;
  status: PublicationStatus;
  title: string;
  description?: string;
  navigation?: Partial<Record<NavigationProjection, number>>;
  render: () => ReactElement;
}

export interface SiteRoute {
  path: string;
  element: ReactElement;
}

export interface NavigationPage {
  path: string;
  label: string;
}

export interface RouteMetadata {
  title: string;
  description?: string;
  robots: 'index, follow' | 'noindex, follow';
  canonicalUrl: string;
}

export type PageResolution =
  | { kind: 'known'; canonicalPath: string; status: PublicationStatus }
  | { kind: 'unknown' };

const plannedPage = (path: string, label: string): SitePage => ({
  path,
  label,
  status: 'planned',
  title: `${label} | ${SITE_TITLE}`,
  render: () => <PlaceholderPage title={label} description={PLACEHOLDER_DESCRIPTION} />,
});

const pages: readonly SitePage[] = [
  {
    path: '/',
    label: 'Início',
    status: 'published',
    title: `${SITE_TITLE} | ${SITE_TAGLINE}`,
    description: 'Automação de negócios com inteligência artificial para pequenos negócios brasileiros.',
    navigation: { primary: 0, 'footer-quick': 0 },
    render: () => (
      <Home
        footerQuickPages={navigationPages('footer-quick')}
        footerOfferPages={navigationPages('footer-offers')}
      />
    ),
  },
  plannedPage('/atendente-ia', 'Atendente IA'),
  plannedPage('/agendamento', 'Agendamento'),
  plannedPage('/painel', 'Painel'),
  plannedPage('/precos', 'Preços'),
  plannedPage('/consultoria', 'Consultoria'),
  plannedPage('/materiais', 'Materiais'),
  plannedPage('/sobre', 'Sobre'),
  plannedPage('/contato', 'Contato'),
];

const normalizePath = (pathname: string): string => {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return trimmed.toLowerCase();
};

const findPage = (pathname: string): SitePage | undefined => {
  const canonicalPath = normalizePath(pathname);
  return pages.find(page => page.path === canonicalPath);
};

const navigationPages = (projection: NavigationProjection): readonly NavigationPage[] => pages
  .filter(page => page.status === 'published' && page.navigation?.[projection] !== undefined)
  .sort((left, right) => left.navigation![projection]! - right.navigation![projection]!)
  .map(page => ({ path: page.path, label: page.label }));

export const siteCatalog = {
  routes(): readonly SiteRoute[] {
    return pages.map(page => ({ path: page.path, element: page.render() }));
  },

  resolve(pathname: string): PageResolution {
    const page = findPage(pathname);
    return page
      ? { kind: 'known', canonicalPath: page.path, status: page.status }
      : { kind: 'unknown' };
  },

  navigation(projection: NavigationProjection): readonly NavigationPage[] {
    return navigationPages(projection);
  },

  metadata(pathname: string): RouteMetadata {
    const page = findPage(pathname);

    if (!page) {
      return {
        title: `Página não encontrada | ${SITE_TITLE}`,
        robots: 'noindex, follow',
        canonicalUrl: BASE_URL,
      };
    }

    return {
      title: page.title,
      description: page.description,
      robots: page.status === 'published' ? 'index, follow' : 'noindex, follow',
      canonicalUrl: `${BASE_URL}${page.path === '/' ? '' : page.path}`,
    };
  },
} as const;
