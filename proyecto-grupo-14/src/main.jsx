import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login/Login.jsx'
import Inicio from './pages/inicio/Inicio.jsx';
import Contaminacion from './pages/contaminacion/Contaminacion.jsx';
import Calificaciones from './pages/calificaciones/Calificaciones.jsx';
import Quiz from './pages/quiz/Quiz.jsx';
import Acidificacion from './pages/acidificacion/Introduccion/AcidificacionInt.jsx';
import AcidiSensi from './pages/acidificacion/Sensibilizacion/AcidificacionSen.jsx';
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Escasez from './pages/escasez/Escasez.jsx';


/**
 * Creates the router configuration for the application.
 * Defines the routes for the application, including the path and corresponding components.
 * 
 * @type {import("react-router-dom").Router}
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/inicio",
    element: <Inicio />,  
  },

  {
    path: "/contaminacion",
    element: <Contaminacion/>
  },

  {
    path: "/escasez",
    element: <Escasez/>
  },

  {
    path: "acidificacion",
    element: <Acidificacion/>
  },

  {
    path: "acidisensi",
    element: <AcidiSensi/>
  },

  {
    path: "calificaciones",
    element: <Calificaciones/>
  },

  {
    path: "quiz",
    element: <Quiz/>
  },

])

/**
 * Initializes and renders the React application.
 * Wraps the application in React's StrictMode and provides the router to manage navigation.
 * 
 * @param {HTMLElement} rootElement - The root DOM element to render the React application into.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
