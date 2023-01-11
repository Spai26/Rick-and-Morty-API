import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
