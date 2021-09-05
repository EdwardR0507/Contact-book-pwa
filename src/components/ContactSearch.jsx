import React from "react";
const ContactSearch = ({ search, setSearch }) => {
  return (
    <>
      <div className="flex flex-col w-1/2 h-auto">
        <input
          className="bg-gray-300 focus:ring-1 focus:ring-indigo-500 outline-none rounded-3xl p-4 w-full"
          type="text"
          placeholder="🔍 Search Contacts by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default ContactSearch;
