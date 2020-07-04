import movies from './mocks/films';
import {extend} from "./utils.js";

const ALL_GENRES = `All genres`;

const genres = [ALL_GENRES, ...new Set(
    movies.reduce((res, movie) => {
      if (movie.genres) {
        res = res.concat(movie.genres);
      }

      return res;
    }, [])
)];

const initialState = {
  allMovies: movies,
  filteredMovies: movies,
  genres,
  activeGenre: ALL_GENRES
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  GET_FILTERED_MOVIES: `GET_FILTERED_MOVIES`,
};

const ActionCreator = {
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),

  getFilteredMovies: () => ({
    type: ActionType.GET_FILTERED_MOVIES,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILTERED_MOVIES:
      const filteredMovies = state.activeGenre === ALL_GENRES
        ? state.allMovies
        : state.allMovies.filter((movie) => movie.genres.includes(state.activeGenre));

      return extend(state, {
        filteredMovies
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
