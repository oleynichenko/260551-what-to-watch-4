import {connect} from "react-redux";
import {ActionCreator as MoviesActionCreator} from "../../reducer/movies/movies";
import Main from "@components/main/main";
import {unShownMoviesExist} from "../../reducer/selectors";
import {getTitleMovie} from "../../reducer/data/selectors";

const mapStateToProps = (state) => ({
  isShowMore: unShownMoviesExist(state),
  titleMovie: getTitleMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(MoviesActionCreator.updateMoviesLimit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
