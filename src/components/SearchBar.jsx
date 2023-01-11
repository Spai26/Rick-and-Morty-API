import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={value}
          placeholder="digita un ID valido"
          onChange={handleOnChange}
        />
        <button
          onClick={() => {
            onSearch();
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
