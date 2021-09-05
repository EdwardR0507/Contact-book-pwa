import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-800 py-2 fixed left-0 bottom-0 text-white text-center text-base md:text-xl">
      <p>Edward Ramos - &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
