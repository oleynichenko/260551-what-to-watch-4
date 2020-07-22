import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import Header from "@components/header/header";

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
  };
};

export default connect(mapStateToProps)(Header);
