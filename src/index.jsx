import ReactDOM from 'react-dom';
import App from '@components/app/app';
import {MainMovie} from './constants';
import movies from './mocks/films';

ReactDOM.render(
    <App
      movieTitle={MainMovie.TITLE}
      movieGenre={MainMovie.GENRE}
      movieYear={MainMovie.YEAR}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
