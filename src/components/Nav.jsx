import SearchBar from "./SearchBar";
const Nav = ({ handleAddCharacter }) => {
  return (
    <div>
      <SearchBar handleAddCharacter={handleAddCharacter} />
    </div>
  );
};

export default Nav;
