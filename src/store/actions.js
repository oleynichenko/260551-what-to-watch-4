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

export {ActionType, ActionCreator};
