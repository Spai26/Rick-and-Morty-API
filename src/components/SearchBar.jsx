import { useState, useEffect, useRef } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={value}
          placeholder="digita un ID valido"
          onChange={handleOnChange}
          ref={inputFocus}
          autoFocus
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
    </div>
  );
};

export default Searchbar;
