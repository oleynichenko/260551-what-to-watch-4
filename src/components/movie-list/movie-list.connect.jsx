import {connect} from "react-redux";
import MoviesList from "@components/movie-list/movie-list";

const mapStateToProps = (state) => ({
  movies: state.filteredMovies
});

export default connect(mapStateToProps)(MoviesList);
