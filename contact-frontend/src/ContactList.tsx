//pour affc=icher et suprimer
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Contact } from "./types";

interface Props {
  refresh: boolean;
}

export const ContactList: React.FC<Props> = ({ refresh }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:3000/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, [refresh]);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3000/contacts/${id}`);
    fetchContacts();
  };

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          {c.name} ({c.email})
          <button onClick={() => handleDelete(c.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};
