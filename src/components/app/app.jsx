import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "@components/main/main.connect";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
