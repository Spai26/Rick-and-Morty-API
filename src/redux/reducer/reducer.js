import {
  ADD_FAVORITE_CHARACTER,
  DELETE_FAVORITE_CHARACTER,
} from "../actions/type";

const initialState = {
  myFavorites: [],
  character: {},
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
        myFavorites: state.myFavorites.filter((id) => {
          return id !== actions.payload;
        }),
      };
    default:
      return { ...state };
  }
};

export default reducer;
