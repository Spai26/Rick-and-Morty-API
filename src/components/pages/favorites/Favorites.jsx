import { useDispatch, useSelector } from "react-redux";
import Card from "../../Card/Card";
import card from "../../Cards/Cards.module.css";
import styled from "./Favorites.module.css";
import { filterCards, orderCards } from "../../../redux/actions/actions";
const Favorite = (props) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  /*props selection component */
  const selectOptions = [
    {
      id: 1,
      value: "Ascendente",
      label: "Ascendente",
    },
    {
      id: 2,
      value: "Descendente",
      label: "Descendente",
    },
  ];
  //['Male', 'Female', 'unknown', 'Genderless'];
  const selectGender = [
    {
      id: 1,
      value: "Male",
      label: "Male",
    },
    {
      id: 2,
      value: "Female",
      label: "Female",
    },
    {
      id: 3,
      value: "unknown",
      label: "unknown",
    },
    {
      id: 4,
      value: "Genderless",
      label: "Genderless",
    },
  ];

  function handleClick(e) {
    e.preventDefault();
    const { value, name } = e.target;

    if (name === "filter") {
      console.log("here filter");
      return dispatch(filterCards(value));
    }

    if (name === "order") {
      console.log("here order =>", value);
      return dispatch(orderCards(value));
    }
  }

  return (
    <div className={styled.favorites}>
      <div className={styled.select}>
        <div>
          <select onChange={handleClick} defaultValue={"DEFAULT"} name="order">
            <option value="DEFAULT" disabled>
              select option...
            </option>
            {selectOptions.map((op) => (
              <option key={op.id} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleClick} defaultValue={"default"} name="filter">
            <option value="default" disabled>
              select gender ...
            </option>
            {selectGender.map((element) => (
              <option key={element.id} value={element.value}>
                {element.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={card.gallery}>
        {myFavorites?.map((char, index) => (
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
    </div>
  );
};

export default Favorite;
