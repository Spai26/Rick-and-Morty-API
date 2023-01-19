import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER } from "./type";

/*
 * Agrega un personaje a la lista de favoritos
 * @param addID
 */
export function addFavoriteCharacter(addID) {
  return { type: ADD_FAVORITE_CHARACTER, payload: addID };
}
/*
 ! Eliminar el personaje de la lista de favoritos
 * @param deleteID 
 */
export function deleteFavoriteCharacter(deleteID) {
  return { type: DELETE_FAVORITE_CHARACTER, payload: deleteID };
}
