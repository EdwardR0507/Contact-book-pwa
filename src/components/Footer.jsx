import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 py-2 fixed left-0 bottom-0 text-white text-center">
      <p>Edward Ramos - &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
