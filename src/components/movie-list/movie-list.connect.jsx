import {connect} from "react-redux";
import MoviesList from "@components/movie-list/movie-list";
import {getMoviesByGenreAndLimit} from "@reducer/selectors";

const mapStateToProps = (state) => ({
  movies: getMoviesByGenreAndLimit(state)
});

export default connect(mapStateToProps)(MoviesList);
