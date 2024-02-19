import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AboutPage } from './AboutPage/AboutPage.jsx';
import { ServicePage } from './ServicePage/ServicePage.jsx';
import { ProductPage } from './ProductPage/ProductPage.jsx';
import { BlogList } from './Pages/BlogList.jsx';
import { BlogDetails } from './Pages/BlogDetails.jsx';
import { TheTeam } from './Pages/TheTeam.jsx';
import { ContactPage } from './ContectPage/ContactPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <AboutPage/>,
  },
  {
    path: "/Service",
    element: <ServicePage/> ,
  },
  {
    path: "/Product",
    element: <ProductPage/> ,
  },
  {
    path: "/BlogList",
    element: <BlogList/>,
  },
  {
    path: "/BlogDetails",
    element: <BlogDetails/>,
  },
  {
    path: "/TheTeam",
    element: <TheTeam/>,
  },
  {
    path: "/Contact",
    element:<ContactPage/>,
  },
  
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
