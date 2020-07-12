import NameSpace from "../name-space.js";
import {ALL_GENRES} from "../../constants";

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getTitleMovie = (state) => {
  return state[NAME_SPACE].titleMovie;
};

export const getMovieGenres = (state) => {
  return [ALL_GENRES, ...new Set(
      state[NAME_SPACE].movies.reduce((res, movie) => {
        if (movie.genres) {
          res = res.concat(movie.genres);
        }

        return res;
      }, [])
  )];
};
