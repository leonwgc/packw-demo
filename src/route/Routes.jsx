import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./Page1')),
  },
  {
    path: '/page1',
    component: lazy(() => import('./Page1')),
  },
  {
    path: '/page2',
    component: lazy(() => import('./Page2')),
  },
];

export default routes;
