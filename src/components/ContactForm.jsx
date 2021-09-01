import React from "react";
import { ACTIONS } from "../utils/actions";
import useField from "../hooks/useField";
import { v4 as uuidv4 } from "uuid";
const ContactForm = ({ dispatch, setOpen }) => {
  const name = useField("text");
  const phone = useField("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_CONTACT,
      payload: {
        id: uuidv4(),
        name: name.value,
        phone: phone.value,
      },
    });
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <div className="bg-white p-16 rounded shadow-2xl w-11/12 md:w-2/3">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Add Contact</h2>
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
        <div className="flex justify-evenly">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className=" block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Acept
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
