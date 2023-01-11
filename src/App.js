import Cards from "./components/Cards";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  //home  => app

  /*
   * Estado para el el arr de personajes
   */
  const [characters, setCharacters] = useState([]);

  /*
  ! fn => Cierre de una tarjeta de personaje
   */
  const onClose = () => {
    window.alert("emulando un cierre");
  };

  /*
  ? fn => agregar un personaje
   */
  const onSearch = () => {
    setCharacters([
      ...characters,
      {
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ]);
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />

      {characters.map((char, index) => (
        <Cards
          key={index}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default App;
