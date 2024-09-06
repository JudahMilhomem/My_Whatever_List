import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GamesProvider } from './context/GamesContext';

import Home from './routes/Home';
import YourLists from './routes/YourLists';
import CreateList from './routes/CreateList';
import UpdatePage from './routes/UpdatePage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/yourlists",
      element: <YourLists/>   
    },
    {
      path: "/createlist",
      element: <CreateList/>
    },
    {
      path: "createlist/games/:id/update", // <-- change route path (remove 'createlist') **
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
