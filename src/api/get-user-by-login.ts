import { User } from "@/models";
import { apiUrl } from ".";

async function getUserByLogin(username: string, password: string): Promise<User | null> {
  const res = await fetch(`${apiUrl}/users`);
  const data: User[] = await res.json();
  const user = data.find((user) => user.UserUsername === username && user.UserPassword === password);

  if (!user) return null;
  return user;
}

export default getUserByLogin;
