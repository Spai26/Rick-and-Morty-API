import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import styled from "./Nav.module.css";
import { Fragment, useState } from "react";

const Nav = ({ onSearch, logOut }) => {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);

  const onChangeclick = () => {
    setClick(!click);
  };

  const onSearchClick = () => {
    setSearch(!search);
  };

  return (
    <Fragment>
      <header className={styled.header__main}>
        <div className={styled.header__content}>
          <div className={styled.nav__logo}>
            <Link to="/home">
              <span>SergioAi</span>
            </Link>
          </div>
          {/* this style movile */}
          <div className={styled.nav__hamburger}>
            <div
              className={styled.search}
              onClick={onSearchClick}
              click={search.toString()}
            >
              <div>
                <FaSearch />
              </div>
            </div>
            <div onClick={onChangeclick} click={click.toString()}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          <div
            className={`${styled.nav__links} 
            ${click ? styled.isOpen : ""}
          `}
            onClick={onChangeclick}
          >
            <div className={styled.links__item}>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? styled.active : "")}
              >
                Home
              </NavLink>
            </div>
            <div className={styled.links__item}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styled.active : "")}
              >
                About
              </NavLink>
            </div>
            <div className={styled.links__item}>
              <button
                className={styled.logout}
                onClick={() => {
                  logOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={` ${search ? styled.isSearch : styled.nav__search}`}>
        <SearchBar onSearch={onSearch} />
      </div>
    </Fragment>
  );
};

export default Nav;
