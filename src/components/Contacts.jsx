import React, { useReducer, useState, useEffect } from "react";
import ContactTable from "./ContactTable";
import { contactReducer } from "../reducers/contactReducer";
import { ACTIONS, MOODS } from "../constants";
import ContactForm from "./ContactForm";
import ContactModal from "./ContactModal";
import ContactSearch from "./ContactSearch";

// Initial state
const initialState = [];

// Initialize contacts from local storage
const init = () => {
  return JSON.parse(localStorage.getItem("contacts")) || [];
};

const Contacts = () => {
  // Using useReducer to manage state
  const [contacts, dispatch] = useReducer(contactReducer, initialState, init);
  // Using useState to manage modal mood (add, edit) state
  const [mood, setMood] = useState("");
  // Using useState to manage the data per row in the table
  const [data, setData] = useState({});

  // Modal open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Using useState to manage search state
  const [search, setSearch] = useState("");

  // Using useState to manage the filtered contacts
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Save contacts to local storage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Filter contacts by name
  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [search, contacts]);

  // Open modal for add contact
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
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly text-xs md:text-base">
      <div className="flex items-center justify-evenly w-full">
        <ContactSearch search={search} setSearch={setSearch} />
        <button
          type="button"
          onClick={handleClick}
          className=" block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
        >
          Add Contact
        </button>
      </div>
      <ContactTable
        contacts={filteredContacts}
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
