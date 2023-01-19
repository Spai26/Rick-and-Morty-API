import {
  ADD_FAVORITE_CHARACTER,
  DELETE_FAVORITE_CHARACTER,
  FILTER,
  ORDER,
} from "./type";

/*
 * Agrega un personaje a la lista de favoritos
 * @param character => objeto
 */
export function addFavoriteCharacter(character) {
  return { type: ADD_FAVORITE_CHARACTER, payload: character };
}
/*
 ! Eliminar el personaje de la lista de favoritos
 * @param deleteID 
 */
export function deleteFavoriteCharacter(deleteID) {
  return { type: DELETE_FAVORITE_CHARACTER, payload: deleteID };
}

export function filterCards(status) {
  return { type: FILTER, payload: status };
}

export function orderCards(id) {
  return { type: ORDER, payload: id };
}
