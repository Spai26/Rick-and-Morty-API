import Card from "../Card/Card";
import styled from "./Cards.module.css";

/* nos renderiza varios card */
const Cards = ({ onClose, characters }) => {
  return (
    <div className={styled.gallery}>
      {characters.map((char, index) => (
        <Card
          key={index}
          id={char.id}
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
