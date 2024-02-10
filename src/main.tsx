import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root';
import Login from './Pages/Login/Login';
import SIgnup from './Pages/Siginup/SIgnup';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"/",
        element: <Home/>
      }
    ]
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SIgnup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
