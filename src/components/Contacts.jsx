import React from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-evenly">
      <ContactForm />
      <ContactTable contacts={contacts} />
    </div>
  );
};

export default Contacts;
