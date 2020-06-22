import Main from "@components/main/main";

const onMovieTitleClick = () => {};

const App = (props) => {
  const {movieTitle, movieGenre, movieYear, movies} = props;

  return <Main
    title={movieTitle}
    genre={movieGenre}
    year={movieYear}
    movies={movies}
    onMovieTitleClick={onMovieTitleClick}
  />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }))
};

export default App;
