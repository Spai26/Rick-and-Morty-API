import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <h3>{character.status}</h3>
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.origin?.name}</p>
      <img src={character.image} alt={character.name} />
      <button type="submit" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Detail;
