import React, { useReducer, useState } from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import { contactReducer } from "../reducers/contactReducer";
import { ACTIONS } from "../utils/actions";
import ContactEdit from "./ContactEdit";
import ContactModal from "./ContactModal";
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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  //MODAL
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_CONTACT, payload: id });
  };

  const handleEdit = (contact) => {
    console.log("contact view", contact);
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
      {open && <ContactForm dispatch={dispatch} setOpen={setOpen} />}
      <ContactTable
        contactList={state}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setData={setData}
        setIsOpen={setIsOpen}
      />
      <div className="relative z-10">
        <ContactModal open={isOpen} setIsOpen={setIsOpen}>
          <ContactEdit
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
