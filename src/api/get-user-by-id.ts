import { User } from "@/models";
import { apiUrl } from ".";

async function getUserById(userId: number): Promise<User | null> {
  const res = await fetch(`${apiUrl}/users/${userId}`);
  const user: User = await res.json();

  if (!user) return null;
  return user;
}

export default getUserById;
