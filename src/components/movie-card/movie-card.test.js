import MovieCard from "./movie-card";

const movie = {
  id: 1,
  title: `Теория большого взрыва: Откровение ринита`,
  image: `path`,
  preview: `path`,
};

it(`should render MovieCard with Big Bang Theory movie`, () => {
  const tree = renderer.create(
      <MovieCard
        movie={movie}
        onMovieCardMouseEnter={() => {}}
        onMovieCardMouseLeave={() => {}}
        isVideoPlaying={false}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

