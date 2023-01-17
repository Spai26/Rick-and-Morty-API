import { Link } from "react-router-dom";
import styled from "./Card.module.css";


const Card = ({ name, species, gender, image, onClose, id }) => {
  return (
    <div className={styled.card}>
      <div className={styled.card_close}>
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
