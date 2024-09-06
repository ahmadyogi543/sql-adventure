import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Query = () => {
  const [userQuery, setUserQuery] = useState('');

  function handleOnSubmit() {
    setUserQuery('');
  }

  return (
    <div className="d-flex position-relative z-index-100">
      <Form.Control
        as="textarea"
        className="resize-none me-3 p-3"
        placeholder="Tulis query di sini..."
        rows={4}
        onChange={(event) => setUserQuery(event.target.value)}
        value={userQuery}
      ></Form.Control>
      <div className="d-flex flex-column">
        <Button
          className="flex-center mb-3"
          onClick={handleOnSubmit}
          size="lg"
          variant="success"
        >
          <small>SUBMIT</small>
        </Button>
        <Button
          className="flex-center p-2"
          onClick={() => setUserQuery('')}
          size="lg"
          variant="warning"
        >
          <small>CLEAR</small>
        </Button>
      </div>
    </div>
  );
};

export default Query;
