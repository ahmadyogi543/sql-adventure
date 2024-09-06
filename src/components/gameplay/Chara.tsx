import { FC, useEffect, useState } from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { useGameplayStore } from '../../store/GameplayStore';

type CharaProps = {
  title: string;
  missions: any[];
};

const Chara: FC<CharaProps> = ({ title, missions }) => {
  const [show, setShow] = useState(false);
  const { missionIndex, dialogIndex, incrementDialogIndex } =
    useGameplayStore();

  const mission = missions[missionIndex];
  const dialogs = mission.dialogs;
  const dialog = dialogs[dialogIndex];

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="flex-grow-1 position-relative">
      <div className="p-3">
        <h5 className="rounded fw-bold">TOPIK: {title}</h5>
        <p className="m-0">
          MISI {missionIndex + 1}: {mission.title}?
        </p>
      </div>
      <OverlayTrigger
        show={show}
        placement="right"
        overlay={
          <Popover id="popover-basic">
            <Popover.Body>
              <p>{dialog.text}</p>
              <div className="d-flex align-items-center justify-content-between">
                <span>
                  {dialogIndex + 1}/{dialogs.length}
                </span>
                <Button
                  className={`text-white fw-bold px-3`}
                  onClick={incrementDialogIndex}
                  size="sm"
                  variant="success"
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
