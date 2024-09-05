import GameplayMenuLayout from '../../layouts/GameplayMenuLayout';
import { useGameStore } from '../../store/GameStore';

const PlayMenu = () => {
  const { id } = useGameStore();

  return (
    <GameplayMenuLayout title="BERMAIN">
      <p>You are playing {id}</p>
    </GameplayMenuLayout>
  );
};

export default PlayMenu;
