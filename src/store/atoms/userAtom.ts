import { atom } from "recoil";
import { User } from "../../model/User";
import { user_ } from "../../api/MockupData";

export const userState = atom<User | null>({
  key: "userState",
  default: null, // user_,
});
