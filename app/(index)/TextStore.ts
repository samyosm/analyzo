import { create } from "zustand";

export interface ITextStore {
  text: string;
  updateText: (text: string) => void;
}

// TODO: Make persist in localStorage
export const useTextStore = create<ITextStore>(
  set => ({
    text: "",
    updateText: (text: string) => set({ text })
  }),
);
