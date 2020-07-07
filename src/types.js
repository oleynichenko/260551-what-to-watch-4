export const shortMovieType = PropTypes.shape({
  id: PropTypes.string.number,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
});

export const movieType = PropTypes.shape({
  id: PropTypes.string.number,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  releaseDate: PropTypes.number.isRequired,
  runTime: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }),
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
});
