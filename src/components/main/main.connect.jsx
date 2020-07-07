import {connect} from "react-redux";
import Main from "@components/main/main";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);
