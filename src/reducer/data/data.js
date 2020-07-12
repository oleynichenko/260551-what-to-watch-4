import {extend} from "../../utils.js";
import {transformMovie} from "../../adapters/movies";

const initialState = {
  movies: [],
  titleMovie: {}
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_TITLE_MOVIE: `LOAD_TITLE_MOVIE`,
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
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
