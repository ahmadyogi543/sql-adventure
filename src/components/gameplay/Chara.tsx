import { useEffect, useState } from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

const Chara = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);

  return (
    <div className="flex-grow-1 position-relative">
      <div className="p-3">
        <h5 className="rounded fw-bold">TOPIK: Menngenal Hewan</h5>
        <p className="m-0">MISI 1: Hewan Darat atau Laut?</p>
      </div>
      <OverlayTrigger
        show={show}
        placement="right"
        overlay={
          <Popover id="popover-basic">
            <Popover.Body>
              <p>Hi!</p>
              <div className="d-flex align-items-center justify-content-between">
                <span>1/5</span>
                <Button
                  className={`text-white fw-bold px-3`}
                  size="sm"
                  variant="custom-green"
                >
                  OK
                </Button>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <img
          className="position-absolute"
          src={'/images/chara.png'}
          alt="chara"
          width={240}
          style={{
            bottom: -24,
          }}
        />
      </OverlayTrigger>
    </div>
  );
};

export default Chara;
