import { Link } from "react-router-dom";
import styled from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addFavoriteCharacter,
  deleteFavoriteCharacter,
} from "../../redux/actions/actions";

const Card = ({ name, species, gender, image, onClose, id }) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispath = useDispatch();

  const handleFavorite = (id) => {
    if (isFav) {
      setIsFav(false);
      dispath(deleteFavoriteCharacter(id));
    } else {
      setIsFav(true);
      dispath(addFavoriteCharacter(id));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styled.card}>
      <div className={styled.card_close}>
        {isFav ? (
          <button
            className={styled.favorite}
            onClick={() => handleFavorite(id)}
          >
            ❤️
          </button>
        ) : (
          <button onClick={() => handleFavorite(id)}>🤍</button>
        )}
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <div className={styled.card_content}>
        <Link to={`/detail/${id}`}>
          <h1>{name}</h1>
          <h3>{species}</h3>
          <h3>{gender}</h3>
          <img src={image} alt={name} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
