import {extend} from "../../utils.js";
import {transformMovie} from "../../adapters/movies";


const initialState = {
  movies: [],
  titleMovie: {}
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_TITLE_MOVIE: `LOAD_TITLE_MOVIE`,
  UPDATE_MOVIE_FAVORITE_STATUS: `UPDATE_MOVIE_FAVORITE_STATUS`,
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadTitleMovie: (movie) => {
    return {
      type: ActionType.LOAD_TITLE_MOVIE,
      payload: movie,
    };
  },
  updateMovieFavoriteStatus: (movie) => {
    return {
      type: ActionType.UPDATE_MOVIE_FAVORITE_STATUS,
      payload: movie,
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data.map((movie) => transformMovie(movie))));
      });
  },

  loadTitleMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadTitleMovie(transformMovie(response.data)));
      });
  },

  updateMovieFavoriteStatus: (movie) => (dispatch, getState, api) => {
    const newFavoriteStatus = Number(!movie.isFavorite);

    return api.post(`/favorite/${movie.id}/${newFavoriteStatus}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovieFavoriteStatus(transformMovie(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });

    case ActionType.LOAD_TITLE_MOVIE:
      return extend(state, {
        titleMovie: action.payload,
      });

    case ActionType.UPDATE_MOVIE_FAVORITE_STATUS:
      const updatedMovie = action.payload;
      const data = {};

      const oldMovieIndex = state.movies.find(((movie) => movie.id === updatedMovie.id));

      if (oldMovieIndex) {
        state.movies.splice(oldMovieIndex, 1, updatedMovie);
        data.movies = state.movies;
      }

      if (state.titleMovie.id === updatedMovie.id) {
        data.titleMovie = updatedMovie;
      }

      return extend(state, data);
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
