import { Contact } from "@/models";
import Image from "next/image";

type ContactProps = {
  contact: Contact;
};

export default function ContactChip({ contact }: ContactProps) {
  return (
    <div className="flex gap-[1rem] bg-gray-800 rounded-full p-[0.5rem]">
      <Image src={contact.UserImageURL} height={16} width={64} alt="User icon" className="rounded-full" />
      <div className="flex flex-col justify-items-center align-middle">
        <p>
          {contact.UserFirstname} {contact.UserLastname}
        </p>
        <p>{contact.UserPhone}</p>
      </div>
    </div>
  );
}
