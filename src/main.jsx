import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost, { action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css'
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails';


const routerOptions = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    children: [
      {
        path: "/", element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:id",
            loader: postDetailsLoader,
            element: <PostDetails />
          },
        ]
      },
        
  ] },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerOptions} />          
  </React.StrictMode>,
)
