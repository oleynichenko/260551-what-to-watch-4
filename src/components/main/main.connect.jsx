import {connect} from "react-redux";
import {ActionCreator as MoviesActionCreator} from "../../reducer/movies/movies";
import Main from "@components/main/main";
import {unShownMoviesExist} from "../../reducer/selectors";
import {getTitleMovie} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";


const mapStateToProps = (state) => ({
  isShowMore: unShownMoviesExist(state),
  titleMovie: getTitleMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(MoviesActionCreator.updateMoviesLimit());
  },
  changeMovieFavoriteStatus(movie) {
    dispatch(DataOperation.updateMovieFavoriteStatus(movie));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
