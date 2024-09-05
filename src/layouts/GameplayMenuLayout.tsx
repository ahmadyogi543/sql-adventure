import { FC, ReactNode } from 'react';
import Topbar from '../components/admin/Topbar';

type GameplayMenuLayoutProps = {
  children: ReactNode;
};

const GameplayMenuLayout: FC<GameplayMenuLayoutProps> = ({ children }) => {
  return (
    <div className="bg-secondary flex-column-grow">
      <Topbar />
      <div>{children}</div>
    </div>
  );
};

export default GameplayMenuLayout;
