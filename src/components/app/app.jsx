import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "@components/main/main.connect";
import SignIn from "@components/sign-in/sign-in.connect";
import {AppRoute} from "../../constants";
import history from "../../history.js";
import MyList from "@components/my-list/my-list";


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
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main/>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn/>
          </Route>
          <Route exact path={AppRoute.MY_LIST}>
            <MyList/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired
};


export default App;
