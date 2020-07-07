import VideoPlayer from "@components/video-player/video-player";
import {shortMovieType} from "../../types";

const MovieCard = (props) => {
  const {
    movie,
    onMovieCardMouseEnter,
    onMovieCardMouseLeave,
    isVideoPlaying
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieCardMouseEnter(movie)}
      onMouseLeave={onMovieCardMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={isVideoPlaying}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {movie.title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: shortMovieType.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
