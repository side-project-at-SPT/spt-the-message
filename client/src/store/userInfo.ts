import { create } from "zustand";

type UserInfo = {
  name: string;
};

type UserStore = {
  userInfo: UserInfo | null;
};

export const useUserInfoStore = create<UserStore>((set: (partial: UserStore) => void) => ({
  userInfo: null,
  /**
   * api request get userInfo
   */
  getUserInfo: async () => {
    const userInfo = null;
    set({ userInfo });
  },
}));
