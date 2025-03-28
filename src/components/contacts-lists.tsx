"use client";

import { useContacts } from "@/hooks";
import { Contact } from "@/models";
import { useState } from "react";

type ContactListProps = {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactListProps) {
  const [contactList, setContactsList] = useState<Contact[]>(contacts);

  return (
    <div>
      {contacts.length > 0 ? contacts.map((contact) => <p>{contact.UserUsername}</p>) : <p>You have no contacts</p>}
    </div>
  );
}
