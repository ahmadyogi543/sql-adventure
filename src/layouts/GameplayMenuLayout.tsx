import { FC, ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type GameplayMenuLayoutProps = {
  children: ReactNode;
  title: string;
};

const GameplayMenuLayout: FC<GameplayMenuLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <div className="bg-secondary flex-column-grow">
      <div className="d-flex align-items-center justify-content-between bg-primary p-4 px-5">
        <Link to="/">
          <Button variant="secondary">
            <small>KEMBALI</small>
          </Button>
        </Link>
        <h5 className="text-white m-0 fw-bold">{title}</h5>
        <Button className="opacity-0" disabled variant="secondary">
          KEMBALI
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default GameplayMenuLayout;
