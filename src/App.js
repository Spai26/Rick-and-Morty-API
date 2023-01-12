import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Detail from "./components/pages/Detail.jsx";
import LoginForm from "./components/Aplication Form/LoginForm";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";
function App() {
  //home  => app
  /*
   * Estado para el el arr de personajes
   */
  const [characters, setCharacters] = useState([]);

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
    /* setCharacters([
      ...characters,
      {
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ]); */
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
      <Nav onSearch={onSearch} />

      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
