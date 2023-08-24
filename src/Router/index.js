import * as React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Details from '../pages/Details';
import Error from '../pages/Error';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/:id',
        element: <Details />,
    },
    {
        path: '*',
        element: <Error />,
    },
]);
