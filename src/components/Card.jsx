import { Link } from "react-router-dom";

const Card = ({ name, species, gender, image, onClose, id }) => {
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
};

export default Card;
