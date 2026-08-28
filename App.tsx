import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import PlaceholderPage from './pages/PlaceholderPage';
import { siteCatalog } from './site/siteCatalog';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {siteCatalog.routes().map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
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
