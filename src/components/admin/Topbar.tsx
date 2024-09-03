import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <Navbar className="py-3 border-bottom">
      <Container>
        <Navbar.Brand as={Link} className="text-primary fw-bold" to="/">
          SQL Adventure
        </Navbar.Brand>
        <Button className="flex-center" size="sm" variant="outline-danger">
          <MdLogout size={24} />
        </Button>
      </Container>
    </Navbar>
  );
};

export default Topbar;
