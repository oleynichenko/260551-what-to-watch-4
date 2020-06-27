import Main from './main';

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
    title: `Macbeth`,
    image: `img/macbeth.jpg`,
    preview: `path`
  },
  {
    id: 2,
    title: `Aviator`,
    image: `img/aviator.jpg`,
    preview: `path`
  },
  {
    id: 3,
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `path`
  }
];

describe(`MainComponent`, () => {
  it(`should handle click on main movie title`, () => {
    const onTitleClick = jest.fn();

    const main = Enzyme.shallow(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={movies}
          onMovieTitleClick={onTitleClick}
        />
    );

    const title = main.find(`h2.movie-card__title`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });
});
