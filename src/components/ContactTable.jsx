import React from "react";

const TableContacts = ({
  contactList,
  handleDelete,

  setIsOpen,
  setData,
}) => {
  const { contacts } = contactList;
  return (
    <div className="w-full overflow-x-auto flex justify-center my-12">
      <table className="table-auto">
        <thead>
          <tr>
            <th scope="col" className="border-2 py-2 px-4">
              ID
            </th>
            <th scope="col" className="border-2 py-2 px-4">
              Name
            </th>
            <th scope="col" className="border-2 py-2 px-4">
              Number
            </th>
            <th scope="col" className="border-2 py-2 px-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const formatId = contact.id.toString().split("-")[0];
            return (
              <tr key={contact.id}>
                <td className="border-2 py-2 px-4 text-center">{formatId}</td>
                <td className="border-2 py-2 px-4 text-center">
                  {contact.name}
                </td>
                <td className="border-2 py-2 px-4 text-center">
                  {contact.phone}
                </td>
                <td className="border-2 py-2 px-4">
                  <div className="flex justify-evenly">
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mx-4"
                      onClick={() => {
                        setData(contact);
                        setIsOpen(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mx-4"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContacts;
