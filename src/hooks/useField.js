import { useState } from "react";
const useField = ({ type, initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { type, value, onChange };
};
export default useField;
