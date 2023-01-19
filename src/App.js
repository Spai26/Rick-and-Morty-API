import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/pages/About";
import Detail from "./components/pages/Detail.jsx";
import LoginForm from "./components/Aplication Form/LoginForm";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import Favorite from "./components/pages/favorites/Favorites";
function App() {
  //home  => app
  /*
   * Estado para el el arr de personajes
   */
  const [characters, setCharacters] = useState([]);
  const [access, setAcces] = useState(false);

  const location = useLocation();
  const navegacion = useNavigate();

  const email = "user@hotmail.com";
  const password = "asd123";

  useEffect(() => {
    !access && navegacion("/");
  }, [access]);

  const login = (userData) => {
    if (userData.password === password && userData.email === email) {
      setAcces(true);
      navegacion("/home");
    }
  };

  const logOut = () => {
    setAcces(false);
    navegacion("/");
  };

  /*
  ! fn => Cierre de una tarjeta de personaje
   */
  const onClose = (id) => {
    setCharacters((person) => {
      return person.filter((e) => e.id !== id);
    });
  };

  /*
  ? fn => agregar un personaje
  * debe recibir por parametro el id para agregar al cards
   */
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (!exist) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert("Este personaje ya se esta visualizando");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  return (
    <div className="App">
      {location.pathname === "/" ? (
        ""
      ) : (
        <Nav onSearch={onSearch} logOut={logOut} />
      )}

      <Routes>
        <Route exact path="/" element={<LoginForm login={login} />} />
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          exact
          path="/favorites"
          element={<Favorite characters={characters} onClose={onClose} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
