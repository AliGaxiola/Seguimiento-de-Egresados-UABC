import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./pages/Test";
import Inicio from "./pages/Inicio";
import Titulacion from "./pages/Titulacion";
import { CssBaseline } from "@mui/material";
import GaleriaActos from "./pages/GaleriaActos";
import GaleriaPotenciales from "./pages/GaleriaPotenciales";
import GaleriaTomas from "./pages/GaleriaTomas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/pasos-titulacion",
    element: <Titulacion />,
  },
  {
    path: "/galeria-actos-academicos",
    element: <GaleriaActos />,
  },
  {
    path: "/galeria-potenciales-egresar",
    element: <GaleriaPotenciales />,
  },
  {
    path: "/galeria-tomas-protesta",
    element: <GaleriaTomas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
