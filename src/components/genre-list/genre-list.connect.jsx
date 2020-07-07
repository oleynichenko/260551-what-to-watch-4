import {ActionCreator} from "../../store/actions";
import {connect} from "react-redux";
import GenreList from "@components/genre-list/genre-list";

const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
    dispatch(ActionCreator.getFilteredMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
