import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER } from "./type";

/*
 * Agrega un personaje a la lista de favoritos
 * @param valueID
 */
export const addFavoriteCharacter = (valueID) => {
  return { type: ADD_FAVORITE_CHARACTER, payload: valueID };
};
/*
 ! Eliminar el personaje de la lista de favoritos
 * @param favoriteID 
 */
export const deleteFavoriteCharacter = (favoriteID) => {
  return { type: DELETE_FAVORITE_CHARACTER, payload: favoriteID };
};
