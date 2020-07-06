import {MoviesList} from './movie-list.jsx';

const movies = [
  {
    id: 1,
    title: `Теория большого взрыва: Откровение ринита`,
    image: `path`,
    preview: `path`,
    genres: [`Drama`, `Kids & Family`],
  },
  {
    id: 2,
    title: `Звездный путь`,
    image: `path`,
    preview: `path`,
    genres: [`Drama`, `Kids & Family`],
  },
  {
    id: 3,
    title: `Рик и Морти: Риконечная Мортистория`,
    image: `path`,
    preview: `path`,
    genres: [`Drama`, `Kids & Family`],
  },
];

it(`should render MovieList with 3 movie cards`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={movies}
        activeItem={movies[0]}
        onItemAction={() => {}}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
