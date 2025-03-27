import { Contact, User } from "@/models";
import { apiUrl } from ".";

async function getContacts(user: User) {
  const res = await fetch(`${apiUrl}/users/contacts/${user.UserID}`);
  const data = await res.json();
}