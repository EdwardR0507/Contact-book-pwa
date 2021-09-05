import React from "react";

const FormError = ({ condition, message }) => {
  return (
    <>
      <span className="text-red-500">{condition && message}</span>
    </>
  );
};

export default FormError;
