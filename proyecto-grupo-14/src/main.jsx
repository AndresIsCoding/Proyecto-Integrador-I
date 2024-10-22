import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/login/Login.jsx'
import World from './pages/World/World.jsx';  
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";


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
    path: "/world",
    element: <World />,  
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
