import React, { useReducer, useState } from "react";
import ContactTable from "./ContactTable";
import { contactReducer } from "../reducers/contactReducer";
import { ACTIONS } from "../utils/actions";
import { MOODS } from "../utils/moods";
import ContactForm from "./ContactForm";
import ContactModal from "./ContactModal";
const initialState = [];

const Contacts = () => {
  const [contacts, dispatch] = useReducer(contactReducer, initialState);
  const [mood, setMood] = useState("");
  const [data, setData] = useState({});

  //MODAL
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setMood(MOODS.ADD);
    setIsOpen(!isOpen);
  };

  // Dispatch action to add contact
  const handleAdd = (newData) => {
    dispatch({ type: ACTIONS.ADD_CONTACT, payload: newData });
    setIsOpen(!isOpen);
  };

  // Dispatch action to delete contact
  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_CONTACT, payload: id });
  };

  // Dispatch action to edit contact
  const handleEdit = (contact) => {
    dispatch({ type: ACTIONS.EDIT_CONTACT, payload: contact });
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly">
      <button
        type="button"
        onClick={handleClick}
        className=" block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Contact
      </button>
      <ContactTable
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setData={setData}
        setIsOpen={setIsOpen}
        setMood={setMood}
      />
      <div className="relative z-10">
        <ContactModal open={isOpen} setIsOpen={setIsOpen}>
          <ContactForm
            mood={mood}
            handleAdd={handleAdd}
            data={data}
            handleEdit={handleEdit}
            setIsOpen={setIsOpen}
          />
        </ContactModal>
      </div>
    </div>
  );
};

export default Contacts;
