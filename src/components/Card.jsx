const Card = ({ name, species, gender, image, onClose }) => {
  return (
    <>
      <button onClick={onClose}>X</button>
      <h1>{name}</h1>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      <img src={image} alt={name} />
    </>
  );
};

export default Card;
