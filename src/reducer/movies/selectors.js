import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.MOVIES;

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getMoviesLimit = (state) => {
  return state[NAME_SPACE].moviesLimit;
};
