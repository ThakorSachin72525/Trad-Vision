import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./pages/Contact/Contact.js";
import Courses from "./pages/Courses/Courses.js"
import About from "./pages/About/About.js"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "courses",
    element: <Courses/>,
  },
  {
    path: "about",
    element: <About/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark"></ColorModeScript>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
