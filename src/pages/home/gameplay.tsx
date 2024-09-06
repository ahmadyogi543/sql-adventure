import { GameMenu } from '../../constants/game-menu';
import { useGameMenuStore } from '../../store/GameMenuStore';

import CompleteMenu from '../../components/gameplay/CompleteMenu';
import PlayMenu from '../../components/gameplay/PlayMenu';
import StageMenu from '../../components/gameplay/StageMenu';

const HomeGameplayPage = () => {
  const { menu } = useGameMenuStore();

  return (
    <>
      {(() => {
        switch (menu) {
          case GameMenu.STAGE:
            return <StageMenu />;
          case GameMenu.PLAY:
            return <PlayMenu />;
          case GameMenu.COMPLETE:
            return <CompleteMenu />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default HomeGameplayPage;
