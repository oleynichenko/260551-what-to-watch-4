import Main from "@components/main/main";

const App = (props) => {
  const {movieTitle, movieGenre, movieYear, movies} = props;

  return <Main
    title={movieTitle}
    genre={movieGenre}
    year={movieYear}
    movies={movies}
  />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string)
};

export default App;
