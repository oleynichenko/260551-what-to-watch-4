import App from "./app";

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`AppComponent`, () => {
  it(`should render App`, () => {
    const tree = renderer.create(
        <App
          movieTitle={Movie.TITLE}
          movieGenre={Movie.GENRE}
          movieYear={Movie.YEAR}
          movies={movies}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
