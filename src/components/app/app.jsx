import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Main from "@components/main/main.connect";
import SignIn from "@components/sign-in/sign-in.connect";
import {AppRoute} from "../../constants";
import MyList from "@components/my-list/my-list";
import {AuthorizationStatus} from "../../reducer/user/user";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {init} = this.props;

    init();
  }

  render() {
    const {authorizationStatus} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.MAIN} component={Main}/>
          <Route
            exact
            path={AppRoute.LOGIN}
            render={() => {
              return (
                authorizationStatus === AuthorizationStatus.AUTH
                  ? <Redirect to={AppRoute.MAIN} />
                  : <SignIn />
              );
            }}
          />
          <Route
            exact
            path={AppRoute.MY_LIST}
            render={(props) => {
              return (
                authorizationStatus === AuthorizationStatus.NO_AUTH
                  ? <Redirect to={AppRoute.LOGIN} />
                  : <MyList location={props.location}/>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};


export default App;
