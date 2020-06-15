import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`MainComponent`, () => {
  it(`should handle click on main movie title`, () => {
    const onTitleClick = jest.fn();

    const main = Enzyme.shallow(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={movies}
          onTitleClick={onTitleClick}
        />
    );

    const title = main.find(`h2.movie-card__title`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });
});
