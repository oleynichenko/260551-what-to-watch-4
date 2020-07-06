import MovieCard from '../movie-card/movie-card';
import {MOVIE_LAUNCH_DELAY} from "../../constants";
import {connect} from "react-redux";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeCard: null};
    this._timerId = null;

    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this);
    this._onMovieCardMouseLeave = this._onMovieCardMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  _onMovieCardMouseEnter(movie) {
    clearTimeout(this._timerId);

    this._timerId = setTimeout(() => {
      this.setState({activeCard: movie});
    }, MOVIE_LAUNCH_DELAY);
  }

  _onMovieCardMouseLeave() {
    clearTimeout(this._timerId);

    this.setState({activeCard: null});
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;
    const {activeCard} = this.state;

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
                onMovieTitleClick={onMovieTitleClick}
                isVideoPlaying={movie === activeCard}
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
  onMovieTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
