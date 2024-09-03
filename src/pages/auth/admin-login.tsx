import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import HomeLayout from '../../layouts/HomeLayout';

const AuthAdminLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prevSP) => !prevSP);
  }

  return (
    <HomeLayout>
      <h4 className="fw-bold mb-4">MASUK ADMIN</h4>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nama Pengguna</Form.Label>
          <Form.Control type="text" placeholder="Nama Pengguna" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Kata Sandi</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Kata Sandi"
            />
            <Button className="flex-center" onClick={toggleShowPassword}>
              {showPassword ? (
                <BsFillEyeFill className="h6 m-0" />
              ) : (
                <BsFillEyeSlashFill className="h6 m-0" />
              )}
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mt-4">
          <Button className="me-2" variant="primary" type="submit">
            <small>MASUK</small>
          </Button>
          <Button variant="outline-primary" type="reset">
            <small>RESET</small>
          </Button>
        </Form.Group>

        <div className="mt-5">
          <Form.Text>
            Bukan admin? <a href="/">Kembali</a>
          </Form.Text>
        </div>
      </Form>
    </HomeLayout>
  );
};

export default AuthAdminLoginPage;
