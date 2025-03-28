import { Contact, User } from "@/models";
import { apiUrl } from ".";

async function getContacts(user: User): Promise<Contact[]> {
  const res = await fetch(`${apiUrl}/users/contacts/${user.UserID}`);
  const data: Contact[] = await res.json();
  console.log(data);
  return data;
}

export default getContacts;
