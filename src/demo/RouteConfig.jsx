import { lazy } from 'react';

const routes = [
  {
    path: '/useDragMove',
    component: lazy(() => import('./useDragMove')),
  },
  {
    path: '/useCountdown',
    component: lazy(() => import('./useCountdown')),
  },
  {
    path: '/useInViewport',
    component: lazy(() => import('./useInViewport')),
  },
  {
    path: '/usePrevious',
    component: lazy(() => import('./usePrevious')),
  },
  {
    path: '/useSort',
    component: lazy(() => import('./useSort')),
  },
  {
    path: '/useEffect',
    component: lazy(() => import('./useEffect')),
  },
  {
    path: '/useCookie',
    component: lazy(() => import('./useCookie')),
  },
  {
    path: '/useFetch',
    component: lazy(() => import('./useFetch')),
  },
];

export default routes;
