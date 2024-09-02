import { RouteObject } from 'react-router-dom';

import HomeRootPage from '../../pages/home/_root';
import HomeGameplayPage from '../../pages/home/gameplay';
import HomeLearnPage from '../../pages/home/learn';
import HomeLeadboardPage from '../../pages/home/leaderboard';
import HomeSettingsPage from '../../pages/home/settings';
import HomeAboutPage from '../../pages/home/about';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeRootPage />,
  },
  {
    path: '/gameplay',
    element: <HomeGameplayPage />,
  },
  {
    path: '/learn',
    element: <HomeLearnPage />,
  },
  {
    path: '/leaderboard',
    element: <HomeLeadboardPage />,
  },
  {
    path: '/settings',
    element: <HomeSettingsPage />,
  },
  {
    path: '/about',
    element: <HomeAboutPage />,
  },
];
