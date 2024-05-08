import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";

import Root from "./routes/root/root";
import Work from "./routes/work";
import Contact from "./routes/contact";
import Exp from "./routes/exp";
import Splash from "./routes/splash";
import Thankyou from "./routes/thankyou";

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
        element: <Exp />,
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
