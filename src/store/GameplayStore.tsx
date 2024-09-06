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

type Result = {
  correct: boolean;
  data: any;
  message: string;
  query: string;
};

type GameplayStoreState = {
  dialog: Dialog;
  setDialog: (dialog: Dialog) => void;

  index: Index;
  incrementMissionIndex: () => void;
  resetMissionIndex: () => void;
  incrementDialogIndex: () => void;
  resetDialogIndex: () => void;

  results: Result[];
  appendResult: (result: Result) => void;
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

  index: { dialog: 0, mission: 0 },
  incrementMissionIndex: () =>
    set((state) => ({
      index: { ...state.index, mission: state.index.mission + 1 },
    })),
  resetMissionIndex: () =>
    set((state) => ({
      index: { ...state.index, mission: 0 },
    })),
  incrementDialogIndex: () =>
    set((state) => ({
      index: { ...state.index, dialog: state.index.dialog + 1 },
    })),
  resetDialogIndex: () =>
    set((state) => ({
      index: { ...state.index, dialog: 0 },
    })),

  results: [],
  appendResult: (result) =>
    set((state) => ({ results: [...state.results, result] })),
  clearResults: () => set(() => ({ results: [] })),

  state: GameState.START,
  start: () => set(() => ({ state: GameState.START })),
  narration: () => set(() => ({ state: GameState.NARRATION })),
  instruction: () => set(() => ({ state: GameState.INSTRUCTION })),
  answered: () => set(() => ({ state: GameState.ANSWERERD })),
  done: () => set(() => ({ state: GameState.DONE })),
}));
