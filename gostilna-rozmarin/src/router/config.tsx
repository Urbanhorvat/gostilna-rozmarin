import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Gostilna from "../pages/gostilna/page";
import Pice from "../pages/pice/page";
import JedilniList from "../pages/jedilni-list/page";
import Apartmaji from "../pages/apartmaji/page";
import Wellness from "../pages/wellness/page";
import Galerija from "../pages/galerija/page";
import Dozivetja from "../pages/dozivetja/page";
import Cenik from "../pages/cenik/page";
import Kontakt from "../pages/kontakt/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gostilna",
    element: <Gostilna />,
  },
  {
    path: "/pice",
    element: <Pice />,
  },
  {
    path: "/jedilni-list",
    element: <JedilniList />,
  },
  {
    path: "/apartmaji",
    element: <Apartmaji />,
  },
  {
    path: "/wellness",
    element: <Wellness />,
  },
  {
    path: "/galerija",
    element: <Galerija />,
  },
  {
    path: "/dozivetja",
    element: <Dozivetja />,
  },
  {
    path: "/cenik",
    element: <Cenik />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;