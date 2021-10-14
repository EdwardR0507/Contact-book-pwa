import { MOODS } from "../constants";
const ContactTableRow = ({
  contact,
  setData,
  setMood,
  setIsOpen,
  handleDelete,
}) => {
  const { id, name, phone } = contact;
  const formatId = id.toString().split("-")[0];
  return (
    <tr key={id}>
      <td className="border-2 py-2 px-4 text-center ">{formatId}</td>
      <td className="border-2 py-2 px-4 text-center">{name}</td>
      <td className="border-2 py-2 px-4 text-center">{phone}</td>
      <td className="border-2 py-2 px-4">
        <div className="flex justify-evenly">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mx-1.5 md:mx-4"
            onClick={() => {
              setData(contact);
              setMood(MOODS.EDIT);
              setIsOpen(true);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mx-1.5 md:mx-4"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ContactTableRow;
