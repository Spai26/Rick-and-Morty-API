import { Link } from "react-router-dom";
import styled from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addFavoriteCharacter,
  deleteFavoriteCharacter,
} from "../../redux/actions/actions";

const Card = (props) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispath = useDispatch();

  const handleFavorite = (props) => {
    if (isFav) {
      setIsFav(false);
      dispath(deleteFavoriteCharacter(props.id));
    } else {
      setIsFav(true);
      dispath(addFavoriteCharacter(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styled.card}>
      <div className={styled.card_close}>
        {isFav ? (
          <button onClick={() => handleFavorite(props)}>❤️</button>
        ) : (
          <button onClick={() => handleFavorite(props)}>🤍</button>
        )}
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <div className={styled.card_content}>
        <Link to={`/detail/${props.id}`}>
          <h1>{props.name}</h1>
          <h3>{props.species}</h3>
          <h3>{props.gender}</h3>
          <img src={props.image} alt={props.name} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
