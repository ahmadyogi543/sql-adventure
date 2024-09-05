import { create } from 'zustand';

import { GameMenu } from '../constants/game-menu';

type GameMenuStoreState = {
  menu: GameMenu;
  id: number;
  stage: () => void;
  play: (n: number) => void;
  complete: () => void;
  reset: () => void;
};

export const useGameStore = create<GameMenuStoreState>((set) => ({
  menu: GameMenu.STAGE,
  id: 0,
  stage: () => set(() => ({ menu: GameMenu.STAGE })),
  play: (stageId: number) => set(() => ({ menu: GameMenu.PLAY, id: stageId })),
  complete: () => set(() => ({ menu: GameMenu.COMPLETE })),
  reset: () => set(() => ({ menu: GameMenu.STAGE, id: 0 })),
}));
