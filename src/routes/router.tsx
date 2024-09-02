import { createBrowserRouter } from 'react-router-dom';

import { routes as home } from './home/routes';
import { routes as admin } from './admin/routes';

export const router = createBrowserRouter([...home, ...admin]);
