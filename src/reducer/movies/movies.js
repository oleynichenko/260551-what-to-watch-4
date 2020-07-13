import {ALL_GENRES, MOVIES_LIMIT} from "../../constants";
import {extend} from "../../utils";

const initialState = {
  moviesLimit: MOVIES_LIMIT,
  activeGenre: ALL_GENRES
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  UPDATE_MOVIES_LIMIT: `UPDATE_MOVIES_LIMIT`,
  RESET_MOVIES_LIMIT: `RESET_MOVIES_LIMIT`,
};

const ActionCreator = {
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),

  updateMoviesLimit: () => ({
    type: ActionType.UPDATE_MOVIES_LIMIT
  }),

  resetMoviesLimit: () => ({
    type: ActionType.RESET_MOVIES_LIMIT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.UPDATE_MOVIES_LIMIT:
      return extend(state, {
        moviesLimit: state.moviesLimit + MOVIES_LIMIT,
      });
    case ActionType.RESET_MOVIES_LIMIT:
      return extend(state, {
        moviesLimit: MOVIES_LIMIT,
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
