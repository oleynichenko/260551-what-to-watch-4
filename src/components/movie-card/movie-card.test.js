import MovieCard from "./movie-card.jsx";

const movie = {
  id: 1,
  title: `Теория большого взрыва: Откровение ринита`,
  image: `path`,
};

it(`should render MovieCard with Big Bang Theory movie`, () => {
  const onMovieCardMouseEnter = jest.fn();
  const onMovieTitleClick = jest.fn();

  const tree = renderer.create(
      <MovieCard
        movie={movie}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
        onMovieTitleClick={onMovieTitleClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

