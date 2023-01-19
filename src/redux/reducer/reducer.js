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
      };

    case DELETE_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((favorite) => {
          return favorite.id !== actions.payload;
        }),
      };

    case FILTER:
      return {
        ...state,
        allCharacters: [
          ...state.allCharacters.filter(({ gender }) => {
            return gender === actions.payload;
          }),
        ],
      };

    case ORDER:
      return {
        ...state,
        allCharacters: [
          ...state.allCharacters.sort((a, { id }) => {
            return actions.payload ? a < id : a > id;
          }),
        ],
      };
    default:
      return { ...state };
  }
};

export default reducer;
