import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Contact from './components/Contact.jsx';
import AboutUs from './components/AboutUs.jsx';
import Principal from './Principal.jsx';
import Blog from './components/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/Blog",
    element: <Principal/>,
    children:[
      {
        path: "/Blog",
        element: <App/>
      },
      {
        path: "/aboutUs",
        element: <AboutUs/>,
      },
      {
        path: "/artigos",
        element: <Blog/>,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


