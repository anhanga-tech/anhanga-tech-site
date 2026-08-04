import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import { NAV_ITEMS } from './components/Sidebar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {NAV_ITEMS.filter(item => item.href !== '/').map(item => (
            <Route
              key={item.href}
              path={item.href}
              element={<PlaceholderPage title={item.label} description="Esta página está sendo construída. Em breve você encontrará aqui todo o conteúdo sobre este tema." />}
            />
          ))}
          <Route
            path="*"
            element={<PlaceholderPage variant="not-found" title="Página não encontrada" description="O endereço que você tentou acessar não existe. Confira o link ou volte para o início." />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
