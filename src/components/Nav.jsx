import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, logOut }) => {
  return (
    <div>
      <div>
        <SearchBar onSearch={onSearch} />
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
      </div>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Nav;
