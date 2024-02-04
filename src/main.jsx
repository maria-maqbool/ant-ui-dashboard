import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Insights from './components/insights/Insights.jsx';
import Recommends from './components/recommends/Recommends.jsx';
import Messages from './components/messages/Messages.jsx';
import Leyout from './components/leyout/Leyout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Leyout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'insights',
        element: <Insights />,
      },
      {
        path: 'recommends',
        element: <Recommends />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
