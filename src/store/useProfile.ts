import { create } from "zustand";

interface mainProfile {
  imageProfile: string;
  setImageProfile: (image: string) => void;
  isLoginSubProfile: boolean;
  setIsLoginSubProfile: (isLogin: boolean) => void;
}

export const useMainProfile = create<mainProfile>((set) => ({
  imageProfile: "/Avatar.png",
  setImageProfile: (image) => set({ imageProfile: image }),
  isLoginSubProfile: false,
  setIsLoginSubProfile: (isLogin) => set({ isLoginSubProfile: isLogin }),
}));
