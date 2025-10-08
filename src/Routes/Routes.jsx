import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Errorpage/>,
    children: [
      {
        index:true,
        Component: Home,
      },
      {
       path:'/home',
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: Errorpage,
      },
     
    ],
  },
]);

export default router;
