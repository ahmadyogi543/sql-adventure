import { FC, ReactNode } from 'react';
import { Card } from 'react-bootstrap';
import { FaChartBar } from 'react-icons/fa';

type DashboardCard2Props = {
  children: ReactNode;
  title: string;
  variant: string;
};

const DashboardCard2: FC<DashboardCard2Props> = ({
  children,
  title,
  variant,
}) => {
  return (
    <Card bg={variant}>
      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-4">
          <FaChartBar className="me-3" size={28} />
          <h5 className="m-0">{title.toUpperCase()}</h5>
        </div>
        <div>{children}</div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard2;
