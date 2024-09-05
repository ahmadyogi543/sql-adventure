import { FC, ReactNode } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type MenuButtonProps = {
  href: string;
  icon: ReactNode;
  title: string;
};

const MenuButton: FC<MenuButtonProps> = ({ href, icon, title }) => {
  return (
    <Card bg="primary" className="text-secondary flex-grow-1 py-2">
      <Card.Body className="mx-auto flex-center flex-column">
        <div
          className="bg-secondary text-primary rounded-circle flex-center mx-auto mb-4"
          style={{
            width: 96,
            height: 96,
          }}
        >
          {icon}
        </div>
        <Link to={href}>
          <Button className="px-4" variant="secondary">
            <span className="small">{title.toUpperCase()}</span>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MenuButton;
