import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {ActionType, reducer, Operation} from "./data";
import {transformMovie} from "../../adapters/movies";
import {extend} from "../../utils";

const api = createAPI(() => {});

const movies = [
  {
    [`background_color`]: `#CBAC79`,
    [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
    [`description`]: `A former Prohibition-era Jewish `,
    [`director`]: `Sergio Leone`,
    [`genre`]: `Crime`,
    [`id`]: 1,
    [`is_favorite`]: false,
    [`name`]: `Once Upon a Time in America`,
    [`poster_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
    [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    [`rating`]: 9.9,
    [`released`]: 1984,
    [`run_time`]: 229,
    [`scores_count`]: 276395,
    [`starring`]: [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`],
    [`video_link`]: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
  }
];

describe(`Data reducer`, () => {
  it(`should return initial state when no additional params`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: [],
      titleMovie: {}
    });
  });

  it(`should update movies by load movies`, () => {
    expect(reducer({
      movies: [],
      titleMovie: {}
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    })).toEqual({movies, titleMovie: {}});
  });

  it(`should update movies by updating movie favorite status`, () => {
    const transformedMovies = movies.map(transformMovie);
    const movie = transformedMovies[0];
    const updatedMovie = extend(movie, {isFavorite: !movie.isFavorite});

    expect(reducer({
      movies: transformedMovies,
      titleMovie: {}
    }, {
      type: ActionType.UPDATE_MOVIE_FAVORITE_STATUS,
      payload: updatedMovie
    })).toEqual({movies: [updatedMovie], titleMovie: {}});
  });
});

describe(`Data operation`, () => {
  it(`should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadMovies();
    const transformedMovies = movies.map(transformMovie);

    apiMock
      .onGet(`/films`)
      .reply(200, movies);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: transformedMovies,
        });
      });
  });

  it(`should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movie = movies[0];
    const questionLoader = Operation.loadTitleMovie();
    const transformedMovie = transformMovie(movie);

    apiMock
      .onGet(`/films/promo`)
      .reply(200, movie);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_TITLE_MOVIE,
          payload: transformedMovie,
        });
      });
  });

  it(`should make a correct API call to /favorite/:film/:status`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movie = movies[0];
    const updateMovie = Operation.updateMovieFavoriteStatus(movie);
    const transformedMovie = transformMovie(movie);
    const newFavoriteStatus = Number(!transformedMovie.isFavorite);

    apiMock
      .onPost(`/favorite/${transformedMovie.id}/${newFavoriteStatus}`)
      .reply(200, movie);

    return updateMovie(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_MOVIE_FAVORITE_STATUS,
          payload: transformedMovie,
        });
      });
  });
});
