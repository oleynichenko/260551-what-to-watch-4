const MovieCard = (props) => {
  const {movie, onMovieCardMouseEnter, onMovieTitleClick} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieCardMouseEnter(movie);
      }}
    >
      <div className="small-movie-card__image">
        <img src={movie.image} alt={movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={onMovieTitleClick}>
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
