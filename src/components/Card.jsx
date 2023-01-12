import { Link } from "react-router-dom";

const Card = ({ name, species, gender, image, onClose, id }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <button onClick={onClose}>X</button>
        <h1>{name}</h1>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
};

export default Card;
