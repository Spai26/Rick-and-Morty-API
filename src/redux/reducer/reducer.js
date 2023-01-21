import {
  ADD_FAVORITE_CHARACTER,
  DELETE_FAVORITE_CHARACTER,
  FILTER,
  ORDER,
} from "../actions/type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
        allCharacters: [...state.myFavorites, actions.payload],
      };

    case DELETE_FAVORITE_CHARACTER:
      const deletedChar = state.myFavorites.filter(({ id }) => {
        return id !== actions.payload;
      });
      return {
        ...state,
        myFavorites: deletedChar,
        allCharacters: deletedChar,
      };

    case FILTER:
      const copyFilter = [...state.allCharacters];
      const filtrado = copyFilter.filter(
        (char) => char.gender === actions.payload
      );
      return {
        ...state,
        myFavorites: filtrado,
      };

    case ORDER:
      const copyOrder = [...state.allCharacters];
      const order = copyOrder.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === actions.payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === actions.payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    default:
      return { ...state };
  }
};

export default reducer;
