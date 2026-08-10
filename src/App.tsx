import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Com âncora na URL (/projetos#isafe-crm) quem manda no scroll é a página de
    // destino — subir para o topo aqui cancelaria o salto para o caso certo.
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
