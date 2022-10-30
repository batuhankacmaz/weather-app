import React from 'react';
import Weathers from './pages/weathers';
import Favorites from './pages/favorites';
import HomeLayout from './pages/HomeLayout';
import PageNotFound from './pages/404';

export interface IRoute {
  index?: boolean;
  path?: string;
  name: string;
  element: React.ReactNode;
  children?: IRoute[];
}

const routes = [
  {
    path: '/',
    name: 'home',
    element: <HomeLayout />,
    children: [
      { index: true, name: 'index', element: <Weathers /> },
      { path: 'favorites', name: 'favorites', element: <Favorites /> },
      { path: '*', name: 'notFound', element: <PageNotFound /> },
    ],
  },
];

export default routes;
