import {ALL_GENRES} from "../constants";

function getMoviesByGenre(state) {
  return state.activeGenre === ALL_GENRES
    ? state.movies
    : state.movies.filter((movie) => movie.genres.includes(state.activeGenre));
}

export {getMoviesByGenre};
