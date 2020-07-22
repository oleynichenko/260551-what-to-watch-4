import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "@components/main/main.connect";
import SignIn from "@components/sign-in/sign-in.connect";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {init} = this.props;

    init();
  }

  _renderApp() {
    return <Main />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/sign-in" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired
};


export default App;
