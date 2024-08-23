import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/Home';
import YourLists from './routes/YourLists';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/dashboard",
      element: <YourLists/>   
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
