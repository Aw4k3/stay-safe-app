import { User } from "@/models";

let user: User | null = null;

function useUser() {
  return user;
}

function setUser(newUser: User) {
  user = newUser;
}

export default {
  useUser,
  setUser,
};
