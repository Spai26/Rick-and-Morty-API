import { useState, useEffect, useRef } from "react";

import styled from "./SearchBar.module.css";

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const inputFocus = useRef(null);

  /*hacer focus cuando al iniciar el componente */
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    /*evitar que recarge solo funciona en los from*/
    e.preventDefault();
    /*limpiar el input*/
    if (Object.keys(value).length) {
      e.target.reset();
      console.log("Add exitoso");
    }
  };

  return (
    <div className={styled.search_content}>
      <form onSubmit={handleSubmit} className={styled.search_form}>
        <input
          type="text"
          name={value}
          placeholder="digita un ID valido del 1 al 830"
          onChange={handleOnChange}
          ref={inputFocus}
          autoFocus
          autoComplete="off"
        />
        <button
          onClick={() => {
            onSearch(value);
          }}
          type="submit"
        >
          Agregar
        </button>
      </form>
      <div className={styled.erros}>
        Por favor solo ingresa numeros del 1 al 827
      </div>
    </div>
  );
};

export default Searchbar;
