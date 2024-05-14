/* eslint-disable react-refresh/only-export-components */

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loadable from "@loadable/component";
import theme from "./theme";

import Root from "./routes/root/root";

const Work = loadable(() => import("./routes/work"));
const Contact = loadable(() => import("./routes/contact"));
const Experiments = loadable(() => import("./routes/experiments"));
const Splash = loadable(() => import("./routes/splash"));
const Thankyou = loadable(() => import("./routes/thankyou"));

import ErrorPage from "./pages/error-page";

import "./css/reset.css";
import "./css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "experiments",
        element: <Experiments />,
      },
      {
        path: "thankyou",
        element: <Thankyou />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
