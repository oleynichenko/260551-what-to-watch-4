import Main from "./main";

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

const onTitleClick = () => {};

describe(`MainComponent`, () => {
  it(`should render Main`, () => {
    const tree = renderer.create(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={movies}
          onMovieTitleClick={onTitleClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
