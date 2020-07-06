import MovieCard from '../movie-card/movie-card';
import {MOVIE_LAUNCH_DELAY} from "../../constants";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._timerId = null;

    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this);
    this._onMovieCardMouseLeave = this._onMovieCardMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  _onMovieCardMouseEnter(movie) {
    const {onItemAction} = this.props;

    clearTimeout(this._timerId);

    this._timerId = setTimeout(() => {
      onItemAction(movie);
    }, MOVIE_LAUNCH_DELAY);
  }

  _onMovieCardMouseLeave() {
    const {onItemAction} = this.props;

    clearTimeout(this._timerId);
    onItemAction();
  }

  render() {
    const {movies, activeItem} = this.props;

    return <>
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieCardMouseEnter={this._onMovieCardMouseEnter}
                onMovieCardMouseLeave={this._onMovieCardMouseLeave}
                isVideoPlaying={movie === activeItem}
              />
            );
          })
        }
      </div>
    </>;
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.number,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ),
  onItemAction: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    id: PropTypes.string.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};

export default MoviesList;

