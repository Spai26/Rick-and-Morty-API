const Searchbar = ({ onSearch }) => {
  return (
    <div>
      <input type="text" name="search" placeholder="digita un ID valido" />
      <button
        onClick={() => {
          onSearch();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default Searchbar;
