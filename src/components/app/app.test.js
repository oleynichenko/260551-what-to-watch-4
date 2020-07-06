import App from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

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

describe(`AppComponent`, () => {
  it(`should render App`, () => {
    const store = mockStore({
      movies,
      genres: [`All genres`, `Drama`, `Kids & Family`],
      activeGenre: `All genres`
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            movieTitle={Movie.TITLE}
            movieGenre={Movie.GENRE}
            movieYear={Movie.YEAR}
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
