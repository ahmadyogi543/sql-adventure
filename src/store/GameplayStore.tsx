import { create } from 'zustand';

import { GameState } from '../constants/game-state';

type Dialog = {
  query: string;
  type: string;
  validation: string;
};

type Index = {
  dialog: number;
  mission: number;
};

export type Result = {
  correct: boolean;
  data: any;
  message: string;
  query: string;
};

type GameplayStoreState = {
  dialog: Dialog;
  setDialog: (dialog: Dialog) => void;

  missionIndex: number;
  incrementMissionIndex: () => void;
  resetMissionIndex: () => void;

  dialogIndex: number;
  incrementDialogIndex: () => void;
  resetDialogIndex: () => void;

  results: Result[];
  appendResults: (result: Result) => void;
  clearResults: () => void;

  state: GameState;
  start: () => void;
  narration: () => void;
  instruction: () => void;
  answered: () => void;
  done: () => void;
};

export const useGameplayStore = create<GameplayStoreState>((set) => ({
  dialog: { query: '', type: '', validation: '' },
  setDialog: (dialog) => set(() => ({ dialog: dialog })),

  missionIndex: 0,
  incrementMissionIndex: () =>
    set((state) => ({
      missionIndex: state.missionIndex + 1,
    })),
  resetMissionIndex: () =>
    set(() => ({
      missionIndex: 0,
    })),

  dialogIndex: 0,
  incrementDialogIndex: () =>
    set((state) => ({
      dialogIndex: state.dialogIndex + 1,
    })),
  resetDialogIndex: () =>
    set(() => ({
      dialogIndex: 0,
    })),

  results: [],
  appendResults: (result) =>
    set((state) => ({ results: [...state.results, result] })),
  clearResults: () => set(() => ({ results: [] })),

  state: GameState.START,
  start: () => set(() => ({ state: GameState.START })),
  narration: () => set(() => ({ state: GameState.NARRATION })),
  instruction: () => set(() => ({ state: GameState.INSTRUCTION })),
  answered: () => set(() => ({ state: GameState.ANSWERERD })),
  done: () => set(() => ({ state: GameState.DONE })),
}));
