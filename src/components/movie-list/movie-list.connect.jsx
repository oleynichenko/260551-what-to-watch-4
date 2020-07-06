import {connect} from "react-redux";
import MoviesList from "@components/movie-list/movie-list";
import {getMoviesByGenre} from "../../store/selectors";

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state)
});

export default connect(mapStateToProps)(MoviesList);

