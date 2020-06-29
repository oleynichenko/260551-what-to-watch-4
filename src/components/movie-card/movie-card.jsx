import VideoPlayer from "@components/video-player/video-player";

const MovieCard = (props) => {
  const {
    movie,
    onMovieTitleClick,
    onMovieCardMouseEnter,
    onMovieCardMouseLeave,
    isVideoPlaying
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieCardMouseEnter(movie)}
      onMouseLeave={() => onMovieCardMouseLeave()}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={isVideoPlaying}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />
      </div>
      <h3 className="small-movie-card__title" onClick={onMovieTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">
          {movie.title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
