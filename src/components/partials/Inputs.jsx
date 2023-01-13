import { useState } from "react";
import styled from "./inputs.module.css";
const Inputs = (props) => {
  const { label, onChange, errorMessaje, id, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    console.log(focused),
    (
      <div>
        <label htmlFor={inputProps.htmlFor}> {label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span className={styled.error}>{errorMessaje}</span>
      </div>
    )
  );
};

export default Inputs;
