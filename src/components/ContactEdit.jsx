import React from "react";
import useField from "../hooks/useField";
const ContactEdit = ({ handleEdit, setIsOpen, data }) => {
  const name = useField("text", data.name);
  const phone = useField("text", data.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataName = name.value === "" ? data.name : name.value;
    const dataPhone = phone.value === "" ? data.phone : phone.value;
    handleEdit({ id: data.id, name: dataName, phone: dataPhone });
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="bg-white p-16 rounded shadow-2xl w-full">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Edit Contact</h2>
        <div>
          <label name="name" className="block mb-2 font-bold text-gray-700">
            Name:{" "}
          </label>
          <input
            defaultValue={data.name}
            onChange={name.onChange}
            name="name"
            className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-700"
            autoComplete="off"
          />
        </div>
        <div>
          <label name="number" className="block mb-2 font-bold text-gray-700">
            Phone Number:{" "}
          </label>
          <input
            defaultValue={data.phone}
            onChange={phone.onChange}
            name="number"
            className="form-control w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-700"
            autoComplete="off"
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

export default ContactEdit;
