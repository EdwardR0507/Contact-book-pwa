import React from "react";

const TableContacts = ({ contactList, handleDelete }) => {
  const { contacts } = contactList;
  return (
    <table className="table-auto w-11/12">
      <thead>
        <tr>
          <th className="border-2 py-2 px-4">ID</th>
          <th className="border-2 py-2 px-4">Name</th>
          <th className="border-2 py-2 px-4">Number</th>
          <th className="border-2 py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          const formatId = contact.id.toString().split("-")[0];
          return (
            <tr key={contact.id}>
              <td className="border-2 py-2 px-4 text-center">{formatId}</td>
              <td className="border-2 py-2 px-4 text-center">{contact.name}</td>
              <td className="border-2 py-2 px-4 text-center">
                {contact.phone}
              </td>
              <td className="border-2 py-2 px-4 flex justify-evenly">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                  onClick={() => {
                    console.log("edit");
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableContacts;
