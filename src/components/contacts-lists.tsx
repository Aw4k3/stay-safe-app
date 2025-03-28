"use client";

import { useContacts } from "@/hooks";
import { Contact } from "@/models";
import { useState } from "react";
import ListBox from "./list-box";
import ContactChip from "./contact-chip";

type ContactListProps = {
  contacts: Contact[];
};

export default function ContactsList({ contacts }: ContactListProps) {
  return (
    <ListBox className="bg-gray-700 rounded-[2.5rem] p-[1rem] min-w-[24rem]">
      {contacts.length > 0 ? (
        contacts.map((contact, i) => <ContactChip key={i} contact={contact} />)
      ) : (
        <p>You have no contacts</p>
      )}
    </ListBox>
  );
}
