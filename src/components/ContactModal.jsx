import React from "react";
import ReactDom from "react-dom";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
  width: "80%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};
const ContactModal = ({ open, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div
        style={MODAL_STYLES}
        className="rounded p-6 shadow-2xl w-11/12 md:w-2/3"
      >
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ContactModal;
