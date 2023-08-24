import React from 'react';
import ReactDOM from 'react-dom';
import { router } from '../src/Router/index.js';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
