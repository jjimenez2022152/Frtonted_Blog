import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Content } from './App.jsx'
import { Post } from './components/Post.jsx'
import {ProjectsList} from "./pages/ProjectsList.jsx"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "",
      element: <Content />
    },
    {
      path: "/my-projects",
      element: <ProjectsList />,
    },
    {
      path: "/my-projects/:id",
      element: <Post />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

