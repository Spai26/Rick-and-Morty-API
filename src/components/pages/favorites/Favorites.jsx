import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";
import styled from "../../Card/Card.module.css";

const Favorite = (props) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log("mis favoritos", myFavorites);
  const characters = props.characters.filter((char) => {
    for (let value of myFavorites) {
      if (char.id === value.id) {
        return char;
      }
    }
  });
  console.log("mis caracteres", characters);

  /*props selection component */
  const selectOptions = [
    {
      id: 1,
      value: "Ascendente",
      name: "Ascendente",
    },
    {
      id: 2,
      value: "Descendente",
      name: "Descendente",
    },
  ];

  const selectGender = [
    {
      id: 1,
      value: "Male",
      name: "Male",
    },
    {
      id: 2,
      value: "Famele",
      name: "Famele",
    },
    {
      id: 3,
      value: "unknown",
      name: "unknown",
    },
  ];
  /*filter */
  const handleSelectChange = (id) => {};

  /*Order*/

  return (
    <Fragment>
      <div>
        <select onChange={handleSelectChange}>
          <option value="default">select option ...</option>
          {selectOptions.map((op) => (
            <option key={op.id} value={op.value}>
              {op.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select>
          <option value="default">select gender ...</option>
          {selectGender.map((gender) => (
            <option key={gender.id} value={gender.value}>
              {gender.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styled.gallery}>
        {characters.map((char, index) => (
          <Card
            key={index}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={() => props.onClose(char.id)}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Favorite;
