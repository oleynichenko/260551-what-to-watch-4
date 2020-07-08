import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "@components/main/main";
import MoviePage from "@components/movie-page/movie-page";
import movies from '../../mocks/films';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {movieTitle, movieGenre, movieYear} = this.props;

    return <Main
      title={movieTitle}
      genre={movieGenre}
      year={movieYear}
    />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev">
            <MoviePage movie={movies[2]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};

export default App;
