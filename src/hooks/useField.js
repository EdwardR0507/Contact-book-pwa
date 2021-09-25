import { useState } from "react";
const useField = ({ type, initialState }) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { type, value, onChange };
};
export default useField;
