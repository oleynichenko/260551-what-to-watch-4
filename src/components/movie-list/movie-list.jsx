import MovieCard from '../movie-card/movie-card';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this);
  }

  _onMovieCardMouseEnter(movie) {
    this.setState({
      activeCard: movie,
    });
  }

  render() {
    const {moviesList, onMovieTitleClick} = this.props;

    return <>
      <div className="catalog__movies-list">
        {
          moviesList.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieCardMouseEnter={this._onMovieCardMouseEnter}
                onMovieTitleClick={onMovieTitleClick}
              />
            );
          })
        }
      </div>
    </>;
  }
}

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.number,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
  ),
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
