import { RouteRecordRaw } from 'vue-router';
import { LayoutBase } from '../constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/dash',
    name: 'dash',
    meta: {
      title: '概览',
      sort: 0
    },
    component: LayoutBase,
    redirect: {
      path: '/dash/console'
    },
    children: [
      {
        path: '/dash/console',
        name: 'dash-console',
        meta: {
          title: '面板'
        },
        component: () => import('@/views/dash/normal')
      }
    ]
  }
];

export default routes;
