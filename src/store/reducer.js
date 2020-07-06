import movies from '../mocks/films';
import {extend} from "../utils.js";
import {ActionType} from "./actions";
import {ALL_GENRES} from "../constants";

const genres = [ALL_GENRES, ...new Set(
    movies.reduce((res, movie) => {
      if (movie.genres) {
        res = res.concat(movie.genres);
      }

      return res;
    }, [])
)];

const initialState = {
  movies,
  genres,
  activeGenre: ALL_GENRES
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    default:
      return state;
  }
};

export default reducer;
