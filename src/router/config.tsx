import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Resume from "../pages/resume/page";
import Especialidades from "../pages/especialidades/page";
import Projetos from "../pages/projetos/page";
import Prova from "../pages/prova/page";
import PrivacyPolicy from "../pages/privacy/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/curriculo",
    element: <Resume />,
  },
  {
    path: "/especialidades",
    element: <Especialidades />,
  },
  {
    path: "/projetos",
    element: <Projetos />,
  },
  {
    path: "/prova",
    element: <Prova />,
  },
  {
    // A antiga página de depoimentos pode estar indexada ou salva por alguém.
    // Em vez de 404, manda para o lugar que ocupou o seu papel.
    path: "/depoimentos",
    element: <Navigate to="/prova" replace />,
  },
  {
    path: "/politica-privacidade",
    element: <PrivacyPolicy />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
