import {ALL_GENRES} from "@constants";
import {createSelector} from "reselect";
import {getActiveGenre, getMoviesLimit} from "./movies/selectors";
import {getMovies} from "./data/selectors";

const getMoviesByGenre = createSelector(
    getActiveGenre,
    getMovies,
    (activeGenre, movies) => {
      return activeGenre === ALL_GENRES
        ? movies
        : movies.filter((movie) => movie.genres.includes(activeGenre));
    }
);

const unShownMoviesExist = createSelector(
    getMoviesByGenre,
    getMoviesLimit,
    (movies, limit) => {
      return movies.length > limit;
    }
);

const getMoviesByGenreAndLimit = createSelector(
    getMoviesByGenre,
    getMoviesLimit,
    (movies, limit) => movies.slice(0, limit)
);

export {getMoviesByGenreAndLimit, unShownMoviesExist};
