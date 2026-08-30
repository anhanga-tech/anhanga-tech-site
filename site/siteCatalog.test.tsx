import { describe, expect, it } from 'vitest';
import { siteCatalog } from './siteCatalog';

describe('siteCatalog', () => {
  it('resolves canonical, case-insensitive and trailing-slash paths to one page', () => {
    expect(siteCatalog.resolve('/precos')).toEqual({
      kind: 'known',
      canonicalPath: '/precos',
      status: 'planned',
    });
    expect(siteCatalog.resolve('/Precos/')).toEqual({
      kind: 'known',
      canonicalPath: '/precos',
      status: 'planned',
    });
  });

  it('keeps unknown paths distinct from planned pages', () => {
    expect(siteCatalog.resolve('/nao-existe')).toEqual({ kind: 'unknown' });
    expect(siteCatalog.metadata('/nao-existe')).toMatchObject({
      title: 'Página não encontrada | Anhangá Tech',
      robots: 'noindex, follow',
      canonicalUrl: 'https://anhanga.tech',
    });
  });

  it('keeps planned pages out of public navigation and search indexing', () => {
    expect(siteCatalog.navigation('primary')).toEqual([{ path: '/', label: 'Início' }]);
    expect(siteCatalog.navigation('footer-offers')).toEqual([]);
    expect(siteCatalog.metadata('/atendente-ia')).toMatchObject({
      robots: 'noindex, follow',
      canonicalUrl: 'https://anhanga.tech/atendente-ia',
    });
  });

  it('publishes complete metadata for the home page', () => {
    expect(siteCatalog.metadata('/')).toEqual({
      title: 'Anhangá Tech | Automação de Negócios',
      description: 'Automação de negócios com inteligência artificial para pequenos negócios brasileiros.',
      robots: 'index, follow',
      canonicalUrl: 'https://anhanga.tech',
    });
  });

  it('provides every recognized page to the router exactly once', () => {
    const paths = siteCatalog.routes().map(route => route.path);
    expect(paths).toHaveLength(new Set(paths).size);
    expect(paths).toEqual([
      '/',
      '/atendente-ia',
      '/agendamento',
      '/painel',
      '/precos',
      '/consultoria',
      '/materiais',
      '/sobre',
      '/contato',
    ]);
  });
});
