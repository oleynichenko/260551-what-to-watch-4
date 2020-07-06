import Main from "@components/main/main";
import {connect} from "react-redux";

const onMovieTitleClick = () => {};

const App = (props) => {
  const {movieTitle, movieGenre, movieYear} = props;

  return <Main
    title={movieTitle}
    genre={movieGenre}
    year={movieYear}
    onMovieTitleClick={onMovieTitleClick}
  />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export {App};
export default connect(mapStateToProps)(App);
