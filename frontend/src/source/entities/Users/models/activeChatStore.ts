import { create } from "zustand";

interface State {
  chatId: number | null;
}

interface Actions {
  setChatId: (chatId: State["chatId"]) => void;
  clearActiveUser: () => void;
}

export const useActiveChat = create<State & Actions>((set) => ({
  chatId: null,
  setChatId: (chatId) => set(() => ({ chatId })),
  clearActiveUser: () => set(() => ({ chatId: null })),
}));
