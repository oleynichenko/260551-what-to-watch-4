import MovieCard from "./movie-card.jsx";

const movie = {
  id: 1,
  title: `Теория большого взрыва: Откровение ринита`,
  image: `path`,
  preview: `path`
};

describe(`MovieCard`, () => {
  it(`should pass movie info to callback after card hovering`, () => {
    const onMovieCardMouseEnter = jest.fn();
    const onMovieTitleClick = jest.fn();

    const main = Enzyme.shallow(
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieCardMouseEnter={onMovieCardMouseEnter}
          onMovieCardMouseLeave={() => {}}
          onMovieTitleClick={onMovieTitleClick}
          isVideoPlaying={false}
        />
    );

    const movieCard = main.find(`.small-movie-card`).first();

    movieCard.simulate(`mouseenter`);

    expect(onMovieCardMouseEnter.mock.calls.length).toBe(1);
    expect(onMovieCardMouseEnter.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`should handle click on movie title`, () => {
    const onMovieCardMouseEnter = jest.fn();
    const onMovieCardMouseLeave = jest.fn();
    const onMovieTitleClick = jest.fn();

    const main = Enzyme.shallow(
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieCardMouseEnter={onMovieCardMouseEnter}
          onMovieCardMouseLeave={onMovieCardMouseLeave}
          onMovieTitleClick={onMovieTitleClick}
          isVideoPlaying={false}
        />
    );

    const movieCardTitle = main.find(`.small-movie-card__title`).first();

    movieCardTitle.simulate(`click`);

    expect(onMovieTitleClick.mock.calls.length).toBe(1);
  });
});
