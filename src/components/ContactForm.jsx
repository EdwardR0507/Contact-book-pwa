import React from "react";
import useField from "../hooks/useField";
import { MOODS } from "../constants";
import { v4 as uuidv4 } from "uuid";
import FormError from "./FormError";

const ContactForm = ({ handleEdit, setIsOpen, data, mood, handleAdd }) => {
  const name = useField("text");
  const phone = useField("text");

  const validateSubmit = (nameInput, phoneInput) => {
    return nameInput.match(/^([a-zA-ZÀ-ÿ]+\s*)+$/) &&
      phoneInput.match(/^[0-9]{9}$/)
      ? true
      : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood === MOODS.ADD) {
      if (validateSubmit(name.value, phone.value)) {
        handleAdd({
          id: uuidv4(),
          name: name.value,
          phone: phone.value,
        });
      }
    } else {
      const dataName = name.value === "" ? data.name : name.value;
      const dataPhone = phone.value === "" ? data.phone : phone.value;
      if (validateSubmit(dataName, dataPhone)) {
        handleEdit({
          id: data.id,
          name: dataName,
          phone: dataPhone,
        });
        setIsOpen(false);
      }
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
        <div>
          <label name="name" className="block mb-2 font-bold text-gray-700">
            Name:{" "}
          </label>
          {mood === MOODS.ADD ? (
            <>
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
            </>
          ) : (
            <input
              defaultValue={data.name}
              onChange={name.onChange}
              name="name"
              className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-indigo-500"
              autoComplete="off"
            />
          )}
          <FormError
            condition={
              name.value.length > 0 && !name.value.match(/^([a-zA-ZÀ-ÿ]+\s*)+$/)
            }
            message="Name must contain only letters"
          />
        </div>
        <div>
          <label name="number" className="block mb-2 font-bold text-gray-700">
            Phone Number:{" "}
          </label>
          {mood === MOODS.ADD ? (
            <>
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
            </>
          ) : (
            <>
              <input
                defaultValue={data.phone}
                onChange={phone.onChange}
                name="number"
                className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-indigo-500"
                autoComplete="off"
              />
              <FormError
                condition={!data.phone && phone.value.length === 0}
                message="Complete the phone number"
              />
            </>
          )}
          <FormError
            condition={
              phone.value.length > 0 && !phone.value.match(/^[0-9]{9}$/)
            }
            message="Phone number must contain only numbers and 9 digits"
          />
        </div>
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
