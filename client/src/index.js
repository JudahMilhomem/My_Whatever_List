import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GamesProvider } from './context/GamesContext';

import Home from './routes/Home';
import YourPage from './routes/YourPage';
import CreateList from './routes/CreateList';
import UpdatePage from './routes/UpdatePage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/your-page",
      element: <YourPage/>
    },
    {
      path: "/createlist",
      element: <CreateList/>
    },
    {
      path: "createlist/games/:id/update", // !!
      element: <UpdatePage/>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <GamesProvider>
        <RouterProvider router={router}/>
      </GamesProvider>
    </React.StrictMode>
  );
