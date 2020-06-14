import ReactDOM from 'react-dom';
import App from '@components/app/app';
import {MainMovie, MOVIES} from './constants';

ReactDOM.render(
    <App
      movieTitle={MainMovie.TITLE}
      movieGenre={MainMovie.GENRE}
      movieYear={MainMovie.YEAR}
      movies={MOVIES}
    />,
    document.querySelector(`#root`)
);
