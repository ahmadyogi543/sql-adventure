import { FC, ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useGameStore } from '../store/GameStore';

type GameplayMenuLayoutProps = {
  children: ReactNode;
  title: string;
};

const GameplayMenuLayout: FC<GameplayMenuLayoutProps> = ({
  children,
  title,
}) => {
  const { reset } = useGameStore();
  return (
    <div className="bg-secondary flex-column-grow">
      <div className="d-flex align-items-center justify-content-between bg-primary p-3 px-5">
        <Link
          onClick={(ev) => {
            const ok = confirm('Apakah kamu yakin untuk kembali ke beranda?');
            if (!ok) {
              ev.preventDefault();
              return;
            }
            reset();
          }}
          to="/"
        >
          <Button title="Beranda" variant="secondary">
            <MdHome size={24} />
          </Button>
        </Link>
        <h5 className="text-white m-0 fw-bold">{title}</h5>
        <Button className="opacity-0" disabled variant="secondary">
          KEMBALI
        </Button>
      </div>
      <div className="flex-column-grow">{children}</div>
    </div>
  );
};

export default GameplayMenuLayout;
