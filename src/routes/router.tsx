import { createBrowserRouter } from 'react-router-dom';

import { routes as home } from './home/routes';
import { routes as admin } from './admin/routes';
import { routes as auth } from './auth/routes';

export const router = createBrowserRouter([...home, ...auth, ...admin]);
