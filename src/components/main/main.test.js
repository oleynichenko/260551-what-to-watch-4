import {Main} from "./main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

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

const mockStore = configureStore([]);
const onTitleClick = () => {};

describe(`MainComponent`, () => {
  const store = mockStore({
    allMovies: movies,
    filteredMovies: movies,
    genres: [`All genres`, `Drama`, `Kids & Family`],
    activeGenre: `All genres`
  });

  it(`should render Main`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Main
            title={Movie.TITLE}
            genre={Movie.GENRE}
            year={Movie.YEAR}
            onMovieTitleClick={onTitleClick}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
