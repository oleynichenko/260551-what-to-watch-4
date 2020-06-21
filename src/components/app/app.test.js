import App from "./app";

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const movies = [
  {
    id: 1,
    title: `Macbeth`,
    image: `img/macbeth.jpg`,
  },
  {
    id: 2,
    title: `Aviator`,
    image: `img/aviator.jpg`,
  },
  {
    id: 3,
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
  }
];

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
