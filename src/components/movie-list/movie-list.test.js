import MoviesList from './movie-list.jsx';

const moviesList = [
  {
    id: 1,
    title: `Теория большого взрыва: Откровение ринита`,
    image: `path`,
  },
  {
    id: 2,
    title: `Звездный путь`,
    image: `path`,
  },
  {
    id: 3,
    title: `Рик и Морти: Риконечная Мортистория`,
    image: `path`,
  },
];

it(`should render MovieList with 3 movie cards`, () => {
  const onMovieTitleClick = jest.fn();

  const tree = renderer
    .create(
        <MoviesList
          moviesList={moviesList}
          onMovieTitleClick={onMovieTitleClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

