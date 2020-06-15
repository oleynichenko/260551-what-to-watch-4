import Main from "./main";

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const onTitleClick = () => {};

describe(`MainComponent`, () => {
  it(`should render Main`, () => {
    const tree = renderer.create(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={movies}
          onTitleClick={onTitleClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
