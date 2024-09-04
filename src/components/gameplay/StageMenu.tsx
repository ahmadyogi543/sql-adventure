import { Col, Container, Row } from 'react-bootstrap';
import GameplayMenuLayout from '../../layouts/GameplayMenuLayout';

import StageCard1 from '../../assets/images/stage-cards/1.png';
import StageCard2 from '../../assets/images/stage-cards/2.png';
import StageCard3 from '../../assets/images/stage-cards/3.png';
import StageCard4 from '../../assets/images/stage-cards/4.png';
import StageCard5 from '../../assets/images/stage-cards/5.png';
import StageCard6 from '../../assets/images/stage-cards/6.png';
import StageCard7 from '../../assets/images/stage-cards/7.png';
import StageCard8 from '../../assets/images/stage-cards/8.png';
import StageCard9 from '../../assets/images/stage-cards/9.png';
import StageCard10 from '../../assets/images/stage-cards/10.png';

const cards: string[] = [
  StageCard1,
  StageCard2,
  StageCard3,
  StageCard4,
  StageCard5,
];

const cards2: string[] = [
  StageCard6,
  StageCard7,
  StageCard8,
  StageCard9,
  StageCard10,
];

const StageMenu = () => {
  return (
    <GameplayMenuLayout>
      <Container className="p-5">
        <Row className="mb-5 g-3">
          {cards.map((card, index) => (
            <Col className="flex-center" key={`gameplay-menu-item-${index}`}>
              <img
                className="d-block cursor-pointer"
                src={card}
                style={{ width: 160 }}
                alt="stage-card"
              />
            </Col>
          ))}
        </Row>

        <Row>
          {cards2.map((card, index) => (
            <Col className="flex-center" key={`gameplay-menu-item-${index}`}>
              <img
                className="d-block cursor-pointer"
                src={card}
                style={{ width: 160 }}
                alt="stage-card"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </GameplayMenuLayout>
  );
};

export default StageMenu;
