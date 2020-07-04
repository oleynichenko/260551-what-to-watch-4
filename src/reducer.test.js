import {reducer, ActionType} from "./reducer.js";

const movies = [
  {
    id: 1,
    title: `Macbeth`,
    image: `img/macbeth.jpg`,
    genres: [`Documentary`, `Kids & Family`, `Romance`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 2,
    title: `Aviator`,
    image: `img/aviator.jpg`,
    genres: [`Drama`, `Horror`, `Crime`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 3,
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    genres: [`Drama`, `Thriller`, `Comedy`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 4,
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`,
    genres: [`Drama`, `Kids & Family`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 5,
    title: `Revenant`,
    image: `img/revenant.jpg`,
    genres: [`Comedy`, `Kids & Family`, `Documentary`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 6,
    title: `Johnny English`,
    image: `img/johnny-english.jpg`,
    genres: [`Kids & Family`, `Thriller`, `Comedy`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 7,
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`,
    genres: [`Kids & Family`, `Thriller`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 8,
    title: `Pulp Fiction`,
    image: `img/pulp-fiction.jpg`,
    genres: [`Comedy`, `Thriller`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

const genres = [`All genres`, ...new Set(
    movies.reduce((res, movie) => {
      if (movie.genres) {
        res = res.concat(movie.genres);
      }

      return res;
    }, [])
)];

describe(`Reducer`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      allMovies: movies,
      filteredMovies: movies,
      genres,
      activeGenre: `All genres`
    });
  });

  it(`should set genre`, () => {
    expect(reducer({
      allMovies: movies,
      filteredMovies: movies,
      genres,
      activeGenre: `All genres`
    }, {
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `Drama`,
    })).toEqual({
      allMovies: movies,
      filteredMovies: movies,
      genres,
      activeGenre: `Drama`,
    });
  });

  it(`should get films`, () => {
    expect(reducer({
      allMovies: movies,
      filteredMovies: movies,
      genres,
      activeGenre: `Horror`,
    }, {
      type: ActionType.GET_FILTERED_MOVIES,
    })).toEqual({
      allMovies: movies,
      filteredMovies: [movies[1]],
      genres,
      activeGenre: `Horror`,
    });
  });
});
