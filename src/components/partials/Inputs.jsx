import { useState } from "react";
import styled from "../../components/Aplication Form/LoginForm.module.css";

const Inputs = (props) => {
  const { label, onChange, errorMessaje, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className={styled.form__item}>
      <label htmlFor={inputProps.htmlFor}> {label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className={styled.form__error}>{errorMessaje}</span>
    </div>
  );
};

export default Inputs;
