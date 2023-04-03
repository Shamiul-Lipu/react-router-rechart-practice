import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Rechart from './component/Rechart/Rechart';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Default from './component/Default/Default';
import Users from './component/Users/Users';
import UserDetails from './component/UserDetails/UserDetails';
import Posts from './component/Posts/Posts';
import PostSingle from './component/PostSingle/PostSingle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Default></Default>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`)
      },
      {
        path: 'user/:userId',
        element: <UserDetails></UserDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path: 'post/:postId',
        element: <PostSingle></PostSingle>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'rechart',
        element: <Rechart></Rechart>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/* 
  component (UserDetails)
  define dynamic route (user/1, user/2 dynamic-> user/:userId)
  dymaic link (from UserComp add Link to={`/user/${id}`}    )
 */