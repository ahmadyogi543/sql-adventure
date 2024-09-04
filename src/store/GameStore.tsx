import { create } from 'zustand';

import { GameMenu } from '../constants/game-menu';

type GameMenuStoreState = {
  menu: GameMenu;
  stage: () => void;
  play: () => void;
  complete: () => void;
};

export const useGameStore = create<GameMenuStoreState>((set) => ({
  menu: GameMenu.STAGE,
  stage: () => set(() => ({ menu: GameMenu.STAGE })),
  play: () => set(() => ({ menu: GameMenu.PLAY })),
  complete: () => set(() => ({ menu: GameMenu.COMPLETE })),
}));
