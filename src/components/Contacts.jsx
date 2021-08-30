import React, { useReducer, useState } from "react";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import { contactReducer } from "../reducers/contactReducer";
import { ACTIONS } from "../utils/actions";
import ContactEdit from "./ContactEdit";
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
  const [openEdit, setOpenEdit] = useState(false);
  const [rowId, setRowId] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_CONTACT, payload: id });
  };

  const handleClickEdit = () => {
    setOpenEdit(!openEdit);
  };

  const handleEdit = (contact) => {
    console.log("contact view", contact);
    dispatch({ type: ACTIONS.EDIT_CONTACT, payload: contact });
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly">
      <button type="button" onClick={handleClickEdit}>
        Edit Contact
      </button>
      {openEdit && (
        <ContactEdit
          rowId={rowId}
          setRowId={setRowId}
          handleEdit={handleEdit}
          setOpenEdit={setOpenEdit}
        />
      )}
      <button type="button" onClick={handleClick}>
        Add Contact
      </button>
      {open && <ContactForm dispatch={dispatch} setOpen={setOpen} />}
      <ContactTable
        contactList={state}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setRowId={setRowId}
      />
    </div>
  );
};

export default Contacts;
