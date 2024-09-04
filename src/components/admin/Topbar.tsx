import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <Navbar bg="primary" className="p-3">
      <Container>
        <Navbar.Brand as={Link} className="text-white fw-bold mx-auto" to="/">
          TAHAPAN
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Topbar;
