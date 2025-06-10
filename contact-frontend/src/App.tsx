import React, { useState } from "react";
import "./App.css";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1>Mes contacts</h1>
      <ContactForm onAdd={triggerRefresh} />
      <ContactList refresh={refresh} />
    </div>
  );
}

export default App;
