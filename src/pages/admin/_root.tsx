import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import MenuItemList from '../../components/admin/MenuItemList';

const AdminRootPage = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Row className="g-0 flex-grow-1">
        <Col className="border-end justify-content-between" md={3}>
          <div className="text-center p-4 mb-3">
            <p className="m-0 h6 text-primary fw-bold">DAFTAR MENU</p>
          </div>
          <MenuItemList />
        </Col>
        <Col className="d-flex flex-column flex-grow-1">
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default AdminRootPage;
