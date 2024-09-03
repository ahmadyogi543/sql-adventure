import { FC, ReactNode } from 'react';
import { ListGroup } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  active?: boolean;
  href: string;
  icon: ReactNode;
  title: string;
};

const MenuItem: FC<MenuItemProps> = ({ active = false, href, icon, title }) => {
  return (
    <ListGroup.Item as={Link} action active={active} to={href}>
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          {icon}
          <span className="ms-2 small">{title.toUpperCase()}</span>
        </div>

        <BsChevronRight />
      </div>
    </ListGroup.Item>
  );
};

export default MenuItem;
