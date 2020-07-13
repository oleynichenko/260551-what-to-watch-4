import {connect} from "react-redux";
import GenreList from "@components/genre-list/genre-list";
import {getMovieGenres} from "../../reducer/data/selectors";
import {getActiveGenre} from "../../reducer/movies/selectors";
import {ActionCreator as MoviesActionCreator} from "../../reducer/movies/movies";

const mapStateToProps = (state) => ({
  genres: getMovieGenres(state),
  activeGenre: getActiveGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(MoviesActionCreator.setActiveGenre(genre));
    dispatch(MoviesActionCreator.resetMoviesLimit(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
