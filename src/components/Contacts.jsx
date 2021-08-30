import React, { useReducer } from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import { contactReducer } from "../reducers/contactReducer";
import { ACTIONS } from "../utils/actions";
const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-789",
    },
  ],
};
const Contacts = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-evenly">
      <ContactForm dispatch={dispatch} />
      <ContactTable contactList={state} />
    </div>
  );
};

export default Contacts;
