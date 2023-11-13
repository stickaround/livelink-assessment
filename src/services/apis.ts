import { type User } from "types";
import mockUsers from "./mockUsers.json";

export const getUserList = (): Promise<User[]> =>
  new Promise((resolve) => setTimeout(() => resolve(mockUsers), 500));

export function getUserDetail(id: number): Promise<User | undefined> {
  const user = mockUsers.find((mockUser) => mockUser.id === id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(user), 500);
  });
}
