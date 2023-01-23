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
    <div className={styled.main}>
      <div>
        <h1>{character.name}</h1>
      </div>
      <div className={styled.content}>
        <div className={styled.description}>
          <div className={styled.one}>
            <p>Status :</p>
            <p>Specie :</p>
            <p>Gender :</p>
            <p>Origin :</p>
          </div>
          <div className={styled.two}>
            <p>
              {character.status}
              {character.status === "Alive" ? (
                <GiHearts className={styled.alive} />
              ) : (
                <GiDeathSkull className={styled.dead} />
              )}
            </p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
          </div>
        </div>
        <div>
          <img src={character.image} alt={character.name} />
        </div>
      </div>

      <button type="submit" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Detail;
