import { getUserById } from "@/api";
import ContactsList from "@/components/contacts-lists";
import { setUser, useContacts } from "@/hooks";

export default async function Home() {
  const user = await getUserById(24);
  if (user) setUser(user);
  return <div className="flex gap-[1rem]">
    <ContactsList contacts={await useContacts()}/>
  </div>;
}
