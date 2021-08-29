import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-16 rounded shadow-2xl w-2/3">
      <form className="space-y-5">
        <div>
          <label name="name" className="block mb-2 font-bold text-gray-500">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-700"
            autoComplete="off"
          />
        </div>
        <div>
          <label name="number" className="block mb-2 font-bold text-gray-500">
            Number:{" "}
          </label>
          <input
            type="text"
            name="number"
            className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-700"
            autoComplete="off"
          />
        </div>
        <button className=" block w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
