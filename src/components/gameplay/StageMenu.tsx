import { Col, Container, Row } from 'react-bootstrap';

import GameplayMenuLayout from '../../layouts/GameplayMenuLayout';
import { useGameStore } from '../../store/GameStore';

const DATA: { id: number; unlock: boolean; uri: string; star: number }[] = [
  {
    id: 1,
    unlock: true,
    uri: '/images/stage-cards/1.png',
    star: 2,
  },
  {
    id: 2,
    unlock: true,
    uri: '/images/stage-cards/2.png',
    star: 3,
  },
  {
    id: 3,
    unlock: true,
    uri: '/images/stage-cards/3.png',
    star: 2,
  },
  {
    id: 4,
    unlock: true,
    uri: '/images/stage-cards/4.png',
    star: 0,
  },
  {
    id: 5,
    unlock: false,
    uri: '/images/stage-cards/unknown.png',
    star: 0,
  },
  {
    id: 6,
    unlock: false,
    uri: '/images/stage-cards/unknown.png',
    star: 0,
  },
  {
    id: 7,
    unlock: false,
    uri: '/images/stage-cards/unknown.png',
    star: 0,
  },
  {
    id: 8,
    unlock: false,
    uri: '/images/stage-cards/unknown.png',
    star: 0,
  },
  {
    id: 9,
    unlock: false,
    uri: '/images/stage-cards/unknown.png',
    star: 0,
  },
  {
    id: 10,
    unlock: false,
    uri: '/images/stage-cards/unknown.png',
    star: 0,
  },
];

const StageMenu = () => {
  const { play } = useGameStore();

  return (
    <GameplayMenuLayout>
      <Container className="p-5">
        <Row className="g-4 gap-2">
          {DATA.map((data) => (
            <Col
              className="flex-center flex-column"
              key={`stage-menu-${data.id}`}
              onClick={data.unlock ? play : () => {}}
            >
              <img
                className={`d-block rounded ${
                  data.unlock
                    ? 'cursor-pointer animation-shake'
                    : 'cursor-not-allowed'
                }`}
                width={160}
                src={data.uri}
                alt=""
              />
              <div className="mt-2 flex-center">
                {Array.from({ length: data.star }, (_, k) => k + 1).map(() => (
                  <img width={24} src="/images/stage-cards/star.png" alt="" />
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </GameplayMenuLayout>
  );
};

export default StageMenu;
