import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <Navbar bg="primary" className="p-3">
      <Container>
        <Link to="/">
          <Button variant="secondary">
            <small>KEMBALI</small>
          </Button>
        </Link>
        <Navbar.Brand as={Link} className="text-white fw-bold mx-auto" to="/">
          PILIH TOPIK
        </Navbar.Brand>
        <Button className="opacity-0" disabled variant="secondary">
          <small>KEMBALI</small>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Topbar;
