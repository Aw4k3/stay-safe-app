import { User } from "@/models";
import { apiUrl } from ".";

async function getUserById(userId: number): Promise<User | null> {
  const res = await fetch(`${apiUrl}/users/${userId}`);
  const users: User[] = await res.json();

  if (!users) return null;
  return users[0];
}

export default getUserById;
