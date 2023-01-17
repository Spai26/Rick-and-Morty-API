import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "./Detail.module.css";
import { GiDeathSkull, GiHearts } from "react-icons/gi";
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
    <div className={styled.detail_main}>
      <div>
        <h1>{character.name}</h1>
        <div className={styled.status}>
          <h3>{character.status}</h3>
          {character.status === "Alive" ? <GiHearts /> : <GiDeathSkull />}
        </div>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <button type="submit" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Detail;
