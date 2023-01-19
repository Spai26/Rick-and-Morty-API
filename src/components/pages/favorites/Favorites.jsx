import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";
import styled from "../../Card/Card.module.css";

const Favorite = (props) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const characters = props.characters.filter((element) => {
    return myFavorites.includes(element.id);
  });
  return (
    <Fragment>
      <div className={styled.gallery}>
        {characters.map((char, index) => (
          <Card
            key={index}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={() => props.onClose(char.id)}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Favorite;
