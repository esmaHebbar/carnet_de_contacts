//pour ajouter un contact
import React, { useState } from "react";
import axios from "axios";

interface Props {
  onAdd: () => void;
}

export const ContactForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/contacts", { name, email });
    setName("");
    setEmail("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};
