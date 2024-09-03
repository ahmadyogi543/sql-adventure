import { FC, ReactNode } from 'react';
import { Card } from 'react-bootstrap';

type DashboardCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  variant: string;
};

const DashboardCard: FC<DashboardCardProps> = ({
  icon,
  title,
  subtitle,
  variant,
}) => {
  return (
    <Card bg={variant}>
      <Card.Body className="p-4">
        <h5 className="mb-4">{title.toUpperCase()}</h5>
        <div className="d-flex align-items-center">
          {icon}
          <Card.Text className="small m-0 ms-3">
            {subtitle.toUpperCase()}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
