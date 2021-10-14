import React from "react";
import ContactTableRow from "./ContactTableRow";
const TableContacts = ({
  contacts,
  handleDelete,
  setIsOpen,
  setData,
  setMood,
}) => {
  return (
    <div className="w-full h-auto text-xs md:text-base flex justify-center">
      <table className="table-auto block overflow-x-auto mx-2 md:mx-4">
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
          {contacts.length !== 0 ? (
            contacts.map((contact) => (
              <ContactTableRow
                key={contact.id}
                contact={contact}
                setMood={setMood}
                setIsOpen={setIsOpen}
                setData={setData}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td className="border-2 py-2 px-4 text-center" colSpan="4">
                No contacts...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableContacts;
