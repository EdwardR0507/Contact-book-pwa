import React from "react";
import useField from "../hooks/useField";
const ContactEdit = ({ rowId, setRowId, handleEdit, setOpenEdit }) => {
  const name = useField("text");
  const phone = useField("text");

  const handleAdd = () => {
    handleEdit({ id: rowId, name: name.value, phone: phone.value });
    setRowId("");
    setTimeout(() => {
      setOpenEdit(false);
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-16 rounded shadow-2xl w-11/12 md:w-2/3">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Edit Contact</h2>
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
            className=" block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleAdd}
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
