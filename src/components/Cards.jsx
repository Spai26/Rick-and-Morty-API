import Card from "./Card";
/* nos renderiza varios card */
const Cards = ({ onClose, characters }) => {
  return (
    <div>
      {characters.map((char, index) => (
        <Card
          key={index}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
