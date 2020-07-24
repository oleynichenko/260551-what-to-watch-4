import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import App from "@components/app/app";
import {getAuthorizationStatus} from "../../reducer/user/selectors";


const mapDispatchToProps = (dispatch) => ({
  init() {
    dispatch(DataOperation.loadMovies());
    dispatch(DataOperation.loadTitleMovie());
    dispatch(UserOperation.checkAuth());
  },
});

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
