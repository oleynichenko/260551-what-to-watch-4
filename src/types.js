export const shortMovieType = PropTypes.shape({
  id: PropTypes.string.number,
  title: PropTypes.string,
  image: PropTypes.string,
  preview: PropTypes.string,
  poster: PropTypes.string,
  cover: PropTypes.string,
  releaseDate: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
});

export const movieType = PropTypes.shape({
  id: PropTypes.string.number,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  releaseDate: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
});
