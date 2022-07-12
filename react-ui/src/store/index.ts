import { atom, selector } from "recoil";

export const currentUserState = atom({
  key: "CurrentUser",
  default: {}
});

export const currentUserNameState = selector({
  key: "CurrentUserName",
  get: ({ get }) => {
    return get(currentUserState);
  }
});
