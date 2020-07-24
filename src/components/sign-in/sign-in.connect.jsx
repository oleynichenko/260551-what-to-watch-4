import {connect} from "react-redux";
import SignIn from "@components/sign-in/sign-in";
import {Operation as UserOperation} from "@reducer/user/user";


const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});


export default connect(null, mapDispatchToProps)(SignIn);
