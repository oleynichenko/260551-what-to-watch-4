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

    const main = Enzyme.shallow(
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieCardMouseEnter={onMovieCardMouseEnter}
          onMovieCardMouseLeave={() => {}}
          isVideoPlaying={false}
        />
    );

    const movieCard = main.find(`.small-movie-card`).first();

    movieCard.simulate(`mouseenter`);

    expect(onMovieCardMouseEnter.mock.calls.length).toBe(1);
    expect(onMovieCardMouseEnter.mock.calls[0][0]).toMatchObject(movie);
  });
});
