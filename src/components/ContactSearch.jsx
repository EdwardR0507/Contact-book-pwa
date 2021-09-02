import React from "react";

const ContactSearch = () => {
  return (
    <>
      <div className="flex flex-col ">
        <input
          className="bg-gray-300 focus:ring-1 focus:ring-indigo-500 outline-none rounded-3xl p-4 w-full"
          type="text"
          placeholder="🔍 Search Contacts..."
        />
      </div>
    </>
  );
};

export default ContactSearch;
