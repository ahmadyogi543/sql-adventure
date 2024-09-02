import { RouteObject } from 'react-router-dom';

import AdminRootPage from '../../pages/admin/_root';
import AdminDashboardPage from '../../pages/admin/dashboard';
import AdminUsersPage from '../../pages/admin/users';
import AdminProgressPage from '../../pages/admin/progress';
import AdminStatsPage from '../../pages/admin/stats';

export const routes: RouteObject[] = [
  {
    path: '/admin/',
    element: <AdminRootPage />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboardPage />,
      },
      {
        path: 'users',
        element: <AdminUsersPage />,
      },
      {
        path: 'progress',
        element: <AdminProgressPage />,
      },
      {
        path: 'stats',
        element: <AdminStatsPage />,
      },
    ],
  },
];
