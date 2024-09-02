import { RouteObject } from 'react-router-dom';

import AuthAdminLoginPage from '../../pages/auth/admin-login';
import AuthLoginPage from '../../pages/auth/login';
import AuthRegisterPage from '../../pages/auth/register';

export const routes: RouteObject[] = [
  {
    path: '/admin/login',
    element: <AuthAdminLoginPage />,
  },
  {
    path: '/login',
    element: <AuthLoginPage />,
  },

  {
    path: '/register',
    element: <AuthRegisterPage />,
  },
];
