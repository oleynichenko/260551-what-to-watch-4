import Main from './main';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`MainComponent`, () => {
  it(`should handle click on main movie title`, () => {
    const onTitleClick = jest.fn();

    const store = mockStore({
      allMovies: movies,
      filteredMovies: movies,
      genres: [`All genres`, `Drama`, `Kids & Family`],
      activeGenre: `All genres`
    });

    const main = Enzyme.mount(
        <Provider store={store}>
          <Main
            title={Movie.TITLE}
            genre={Movie.GENRE}
            year={Movie.YEAR}
            onMovieTitleClick={onTitleClick}
          />
        </Provider>
    );

    const title = main.find(`h2.movie-card__title`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });
});
