import MoviesList from './movie-list.jsx';

const moviesList = [
  {
    id: 1,
    title: `Теория большого взрыва: Откровение ринита`,
    image: `path`,
    preview: `path`,
  },
  {
    id: 2,
    title: `Звездный путь`,
    image: `path`,
    preview: `path`,
  },
  {
    id: 3,
    title: `Рик и Морти: Риконечная Мортистория`,
    image: `path`,
    preview: `path`,
  },
];

it(`should render MovieList with 3 movie cards`, () => {
  const onMovieTitleClick = jest.fn();

  const tree = renderer
    .create(
        <MoviesList
          moviesList={moviesList}
          onMovieTitleClick={onMovieTitleClick}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
