import { atom } from "nanostores";
import { me } from "../utils/rest-api/users";
import { logout } from "../utils/rest-api/auth";

export interface User {
  _id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  balance: number;
}

export const isAuthenticated = atom<boolean>(false);
export const user = atom<User|undefined>(undefined);
export const authenticate = async () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    isAuthenticated.set(false);
    user.set(undefined);
    return;
  }
  try {
    const meResponse = await me();
    const authUser = meResponse.data.data as User;
    user.set(authUser);
    isAuthenticated.set(true);
  } catch (e) {
    user.set(undefined);
    isAuthenticated.set(false);
  }
}
export const invalidate = async() => {
  await logout();
  localStorage.removeItem("access_token");
  user.set(undefined);
  isAuthenticated.set(false);
}