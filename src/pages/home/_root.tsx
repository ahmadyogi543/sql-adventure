import { Col, Row } from 'react-bootstrap';
import {
  IoIosJournal,
  IoIosListBox,
  IoLogoGameControllerA,
  IoMdSettings,
} from 'react-icons/io';

import HomeLayout from '../../layouts/HomeLayout';
import MenuButton from '../../components/MenuButton';

const HomeRootPage = () => {
  return (
    <HomeLayout>
      <h4 className="fw-bold mb-3">MENU</h4>
      <div className="d-flex flex-column flex-grow-1">
        <Row className="mb-2 d-flex flex-column flex-grow-1">
          <Col className="d-flex flex-column flex-grow-1">
            <MenuButton
              href="/gameplay"
              icon={
                <IoLogoGameControllerA
                  className="m-0"
                  style={{ fontSize: 64 }}
                />
              }
              title="Bermain"
            />
          </Col>
        </Row>
        <Row className="g-2">
          <Col md={4}>
            <MenuButton
              href="/learn"
              icon={<IoIosJournal className="m-0" style={{ fontSize: 48 }} />}
              title="Belajar"
            />
          </Col>
          <Col md={4}>
            <MenuButton
              href="/settings"
              icon={<IoMdSettings className="m-0" style={{ fontSize: 48 }} />}
              title="Pengaturan"
            />
          </Col>
          <Col md={4}>
            <MenuButton
              href="/leaderboard"
              icon={<IoIosListBox className="m-0" style={{ fontSize: 42 }} />}
              title="Leaderboard"
            />
          </Col>
        </Row>
      </div>
    </HomeLayout>
  );
};

export default HomeRootPage;
