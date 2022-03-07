import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts";
import Homepage from "pages/Homepage";
import Presalepage from "pages/Presalepage";
import Inventorypage from "pages/Inventorypage";
import Newgame from "pages/Newgame";
import Marketpage from "pages/Marketpage";
import Itempage from "pages/Itempage";
import MountItempage from "pages/MountItempage";
import PetItempage from "pages/PetItempage";
import Loading from "components/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/presale", element: <Presalepage /> },
        { path: "/inventories", element: <Inventorypage /> },
        { path: "/marketplace", element: <Marketpage /> },
        { path: "/game", element: <Newgame /> },
        { path: "/items/character/:id", element: <Itempage /> },
        { path: "/items/mount/:id", element: <MountItempage /> },
        { path: "/items/pet/:id", element: <PetItempage /> },
  
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// const Homepage = Loadable(lazy(() => import("pages/Homepage")));
