import React from "react";
import { ACTIONS } from "../utils/actions";
import useField from "../hooks/useField";
import { v4 as uuidv4 } from "uuid";
const ContactForm = ({ dispatch }) => {
  const name = useField("text");
  const phone = useField("text");

  const handleAdd = () => {
    dispatch({
      type: ACTIONS.ADD_CONTACT,
      payload: {
        id: uuidv4(),
        name: name.value,
        phone: phone.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-16 rounded shadow-2xl w-2/3">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label name="name" className="block mb-2 font-bold text-gray-700">
            Name:{" "}
          </label>
          <input
            {...name}
            name="name"
            placeholder="Write a name..."
            className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-700"
            autoComplete="off"
          />
        </div>
        <div>
          <label name="number" className="block mb-2 font-bold text-gray-700">
            Phone Number:{" "}
          </label>
          <input
            {...phone}
            name="number"
            placeholder="Write a phone number..."
            className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-700"
            autoComplete="off"
          />
        </div>
        <button
          onClick={handleAdd}
          className=" block w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
