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
          <button
            onClick={() => handleFavorite(props)}
            className={styled.fav}
            fav={isFav.toString()}
          >
            ❤️
          </button>
        ) : (
          <button
            onClick={() => handleFavorite(props)}
            className={styled.fav}
            fav={isFav.toString()}
          >
            🤍
          </button>
        )}
        <button onClick={() => props.onClose(props.id)} className={styled.fil}>
          X
        </button>
      </div>
      <div className={styled.box}>
        <div className={styled.content}>
          <h1>{props.name}</h1>
          <h3>{props.species}</h3>
          <h3>{props.gender}</h3>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={styled.details}>
          <Link to={`/detail/${props.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
