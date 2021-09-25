import React from "react";
import useField from "../hooks/useField";
import { MOODS } from "../constants";
import { v4 as uuidv4 } from "uuid";
import FormError from "./FormError";

const ContactForm = ({ handleEdit, setIsOpen, data, mood, handleAdd }) => {
  const initialStateName = mood === MOODS.ADD ? "" : data.name;
  const initialStatePhone = mood === MOODS.ADD ? "" : data.phone;

  const name = useField({ type: "text", initialState: initialStateName });
  const phone = useField({ type: "text", initialState: initialStatePhone });

  const validateInputs = (nameInput, phoneInput) => {
    return (
      (nameInput.match(/^([a-zA-ZÀ-ÿ]+\s*)+$/) &&
        phoneInput.match(/^[0-9]{9}$/)) !== null
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs(name.value, phone.value)) {
      mood === MOODS.ADD
        ? handleAdd({
            id: uuidv4(),
            name: name.value,
            phone: phone.value,
          })
        : handleEdit({
            id: data.id,
            name: name.value,
            phone: phone.value,
          });
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-white p-4 md:p-16 rounded shadow-2xl w-full text-xs md:text-base">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {mood === MOODS.ADD ? (
          <h2 className="text-sm md:text-2xl font-bold">New Contact</h2>
        ) : (
          <h2 className="text-sm md:text-2xl font-bold">Edit Contact</h2>
        )}
        <input
          {...name}
          name="name"
          placeholder="Write a name..."
          className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-indigo-500"
          autoComplete="off"
        />
        <FormError
          condition={name.value.length === 0}
          message="Complete the name"
        />
        <FormError
          condition={
            name.value.length > 0 && !name.value.match(/^([a-zA-ZÀ-ÿ]+\s*)+$/)
          }
          message="Name must contain only letters"
        />
        <input
          {...phone}
          name="number"
          placeholder="Write a phone number..."
          className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-indigo-500"
          autoComplete="off"
        />
        <FormError
          condition={phone.value.length === 0}
          message="Complete the phone number"
        />
        <FormError
          condition={phone.value.length > 0 && !phone.value.match(/^[0-9]{9}$/)}
          message="Phone number must contain only numbers and 9 digits"
        />
        <div className="flex justify-evenly">
          <button
            type="button"
            className=" block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setIsOpen(false);
            }}
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
