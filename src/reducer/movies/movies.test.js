import {ActionType, reducer, ActionCreator} from "./movies";

const ALL_GENRES = `All genres`;
const MOVIES_LIMIT = 8;

describe(`Movies reducer`, () => {
  it(`should return initial state when no additional params`, () => {
    expect(reducer(void 0, {})).toEqual({
      moviesLimit: MOVIES_LIMIT,
      activeGenre: ALL_GENRES
    });
  });

  it(`should change active genre`, () => {
    expect(reducer({
      moviesLimit: MOVIES_LIMIT,
      activeGenre: ALL_GENRES
    }, {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `Drama`,
    })).toEqual({
      moviesLimit: MOVIES_LIMIT,
      activeGenre: `Drama`,
    });
  });

  it(`should update movies limit`, () => {
    expect(reducer({
      moviesLimit: MOVIES_LIMIT,
      activeGenre: ALL_GENRES
    }, {
      type: ActionType.UPDATE_MOVIES_LIMIT
    })).toEqual({
      moviesLimit: MOVIES_LIMIT * 2,
      activeGenre: ALL_GENRES
    });
  });

  it(`should reset movies limit`, () => {
    expect(reducer({
      moviesLimit: MOVIES_LIMIT * 3,
      activeGenre: ALL_GENRES
    }, {
      type: ActionType.RESET_MOVIES_LIMIT
    })).toEqual({
      moviesLimit: MOVIES_LIMIT,
      activeGenre: ALL_GENRES
    });
  });
});

describe(`Movies action creators`, () => {
  it(`should change active genre`, () => {
    expect(ActionCreator.setActiveGenre(`Drama`)).toEqual({
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `Drama`,
    });
  });

  it(`should update movies limit`, () => {
    expect(ActionCreator.updateMoviesLimit()).toEqual({
      type: ActionType.UPDATE_MOVIES_LIMIT,
    });
  });

  it(`should reset movies limit`, () => {
    expect(ActionCreator.resetMoviesLimit()).toEqual({
      type: ActionType.RESET_MOVIES_LIMIT,
    });
  });
});
