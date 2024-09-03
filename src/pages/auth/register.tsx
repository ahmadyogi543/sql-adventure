import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import HomeLayout from '../../layouts/HomeLayout';

const AuthRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  function toggleShowPassword(kind: 'real' | 'repeat') {
    if (kind === 'real') {
      setShowPassword((prevSP) => !prevSP);
    } else {
      setShowRepeatPassword((prevRSP) => !prevRSP);
    }
  }

  return (
    <HomeLayout>
      <h4 className="fw-bold mb-4">DAFTAR</h4>
      <Form>
        <Form.Group className="mb-3" controlId="full-name">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text" placeholder="Nama Lengkap" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nama Pengguna</Form.Label>
          <Form.Control type="text" placeholder="Nama Pengguna" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="institution">
          <Form.Label>Institusi</Form.Label>
          <Form.Control type="text" placeholder="Institusi" />
        </Form.Group>

        <Row className="g-3">
          <Col>
            <Form.Label>Kata Sandi</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Kata Sandi"
              />
              <Button
                className="flex-center"
                onClick={() => toggleShowPassword('real')}
              >
                {showPassword ? (
                  <BsFillEyeFill className="h6 m-0" />
                ) : (
                  <BsFillEyeSlashFill className="h6 m-0" />
                )}
              </Button>
            </InputGroup>
          </Col>
          <Col>
            <Form.Label>Ulangi Kata Sandi</Form.Label>
            <InputGroup>
              <Form.Control
                type={showRepeatPassword ? 'text' : 'password'}
                placeholder="Ulangi Kata Sandi"
              />
              <Button
                className="flex-center"
                onClick={() => toggleShowPassword('repeat')}
              >
                {showRepeatPassword ? (
                  <BsFillEyeFill className="h6 m-0" />
                ) : (
                  <BsFillEyeSlashFill className="h6 m-0" />
                )}
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Form.Group className="mt-4">
          <Button className="me-2" variant="primary" type="submit">
            <small>DAFTAR</small>
          </Button>
          <Button variant="outline-primary" type="reset">
            <small>RESET</small>
          </Button>
        </Form.Group>

        <div className="mt-5">
          <Form.Text>
            Sudah punya akun? <a href="/login">Masuk</a>
          </Form.Text>
        </div>
      </Form>
    </HomeLayout>
  );
};

export default AuthRegisterPage;
