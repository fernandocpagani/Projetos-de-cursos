import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Home from './routes/Home.jsx';
import NewPost from './routes/NewPost.jsx';
import './index.css'
import Post from './routes/Post.jsx';
import Admin from './routes/Admin.jsx';
import EditPost from './routes/EditPost.jsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost/>,
      },
      {
        path: "/posts/:id",
        element: <Post />
      },
      {
        path: "/admin",
        element:<Admin/>,
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
