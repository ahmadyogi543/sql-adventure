import { FC, ReactNode } from 'react';
import { Button, Card } from 'react-bootstrap';

type MenuButtonProps = {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
};

const MenuButton: FC<MenuButtonProps> = ({ icon, title, onClick }) => {
  return (
    <Card bg="primary" className="text-secondary flex-grow-1 py-2">
      <Card.Body className="mx-auto d-flex flex-column align-items-center justify-content-center">
        <div
          className="bg-secondary text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{
            width: 96,
            height: 96,
          }}
        >
          {icon}
        </div>
        <Button className="px-4" onClick={onClick} variant="secondary">
          <span className="small fw-bold text-primary">
            {title.toUpperCase()}
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MenuButton;
