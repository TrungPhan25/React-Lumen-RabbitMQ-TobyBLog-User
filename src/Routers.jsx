import React from "react";
import DefaultLayout from "./components/Layout/DefautLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import BlogList from "./Layout/Blog/BlogList";
import BlogItem from "./Layout/Blog/BlogItem";
import Home from "./Layout/Home";
import Page404 from "./Layout/Page404";
import Contract from "./Layout/Contract";

const publicRoutes = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contract",
        element: <Contract />,
      },
      {
        path: "blog",
        element: <BlogList />,
      },
      {
        path: "blog-single/:slug",
        element: <BlogItem />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
