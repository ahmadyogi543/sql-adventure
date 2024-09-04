import { Col, Row } from 'react-bootstrap';
import { FaChartPie, FaUsers } from 'react-icons/fa';

import AdminLayout from '../../layouts/AdminLayout';
import DashboardCard from '../../components/admin/DashboardCard';
import DashboardCard2 from '../../components/admin/DashboardCard2';

const DashboardCard2Content = () => (
  <>
    <Row>
      <Col>
        <small>STAGE 1: -</small>
      </Col>
      <Col>
        <small>STAGE 6: -</small>
      </Col>
    </Row>
    <Row>
      <Col>
        <small>STAGE 2: -</small>
      </Col>
      <Col>
        <small>STAGE 7: -</small>
      </Col>
    </Row>
    <Row>
      <Col>
        <small>STAGE 3: -</small>
      </Col>
      <Col>
        <small>STAGE 8: -</small>
      </Col>
    </Row>
    <Row>
      <Col>
        <small>STAGE 4: -</small>
      </Col>
      <Col>
        <small>STAGE 9: -</small>
      </Col>
    </Row>
    <Row>
      <Col>
        <small>STAGE 5: -</small>
      </Col>
      <Col>
        <small>STAGE 10: -</small>
      </Col>
    </Row>
  </>
);

const AdminDashboardPage = () => {
  return (
    <AdminLayout title="DASHBOARD">
      <Row className="g-3 mb-3">
        <Col>
          <DashboardCard
            icon={<FaUsers size={28} />}
            title="JUMLAH PENGGUNA"
            subtitle="35 PENGGUNA"
            variant="primary text-white"
          />
        </Col>
        <Col>
          <DashboardCard
            icon={<FaChartPie size={28} />}
            title="PROGRESS PENYELESAIAN"
            subtitle="20/35 SELESAI"
            variant="warning"
          />
        </Col>
      </Row>
      <Row className="g-3">
        <Col>
          <DashboardCard2 title="SKOR RATA-RATA" variant="info text-white">
            <DashboardCard2Content />
          </DashboardCard2>
        </Col>
        <Col>
          <DashboardCard2 title="SKOR TERTINGGI" variant="success text-white">
            <DashboardCard2Content />
          </DashboardCard2>
        </Col>
        <Col>
          <DashboardCard2 title="SKOR TERENDAH" variant="danger text-white">
            <DashboardCard2Content />
          </DashboardCard2>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
