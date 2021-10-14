import React from "react";
import ReactDom from "react-dom";

const ContactModal = ({ open, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed rounded inset-0 bg-black opacity-70 z-50" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded p-6 shadow-2xl w-11/12 md:w-2/3 z-50">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ContactModal;
