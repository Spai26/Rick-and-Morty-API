import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/home"> Home </Link>
      <Link to="/about"> About </Link>
    </div>
  );
};

export default Nav;
