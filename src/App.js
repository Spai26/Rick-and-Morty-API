import Card from "./components/Card";
import Cards from "./components/Cards";
import Nav from "./components/Nav";

import characters, { Rick } from "./data";

function App() {
  //home  => app
  const onClose = () => {
    window.alert("emulando un cierre");
  };
  const handleAddCharacter = () => {
    window.alert("agregando un personaje");
  };
  return (
    <div className="App">
      <Nav handleAddCharacter={handleAddCharacter} />

      <Card
        name={Rick.name}
        species={Rick.species}
        gender={Rick.gender}
        image={Rick.image}
        onClose={onClose}
      />
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
