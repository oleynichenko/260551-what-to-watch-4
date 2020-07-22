import {Route, Router, Switch} from 'react-router-dom';
import Main from "@components/main/main.connect";
import SignIn from "@components/sign-in/sign-in.connect";
import {AppRoute} from "../../constants";
import history from "../../history.js";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {init} = this.props;

    init();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main/>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn/>
          </Route>
          <Route exact path={AppRoute.MYLIST}>
            <MyList/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired
};


export default App;
