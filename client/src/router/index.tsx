import React from 'react';

export type RouterConfig = {
  name: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
}

export const routerMap: RouterConfig[] = [
  {
    name: 'login',
    path: '/',
    component: React.lazy(() => import("../pages/Login/index"))
  },
  {
    name: 'lobbies',
    path: '/lobbies',
    component: React.lazy(() => import("../pages/Lobbies/index"))
  }
]