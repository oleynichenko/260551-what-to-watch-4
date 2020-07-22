import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import App from "@components/app/app";


const mapDispatchToProps = (dispatch) => ({
  init() {
    dispatch(DataOperation.loadMovies());
    dispatch(DataOperation.loadTitleMovie());
    dispatch(UserOperation.checkAuth());
  },
});


export default connect(null, mapDispatchToProps)(App);
