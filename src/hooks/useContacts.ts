import { getContacts } from "@/api";
import { Contact } from "@/models";
import { useUser } from "./useUser";

async function useContacts(): Promise<Contact[]> {
  const user = useUser();
  if (!user) return [];
  return await getContacts(user);
}

export default useContacts;
