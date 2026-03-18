import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Resume from "../pages/resume/page";
import Especialidades from "../pages/especialidades/page";
import Projetos from "../pages/projetos/page";
import Depoimentos from "../pages/depoimentos/page";
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
    path: "/depoimentos",
    element: <Depoimentos />,
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