import { useState } from "react";

const Searchbar = ({ handleAddCharacter, initialState = "" }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    //intento de reset
    /* if (!Object.keys(event.target.value)) {
      event.target.reset(); 
    }*/
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleChange}
        placeholder="digita un ID valido"
      />
      <button onClick={handleAddCharacter}>Agregar</button>
    </div>
  );
};

export default Searchbar;
