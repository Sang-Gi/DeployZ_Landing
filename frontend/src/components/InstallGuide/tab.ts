import { atom } from "recoil";

export const tabIndexState = atom<number>({
  key: "tabIndexState",
  default: 0,
});
