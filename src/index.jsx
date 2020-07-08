import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from '@components/app/app';
import {MainMovie} from './constants';
import reducer from "./store/reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        movieTitle={MainMovie.TITLE}
        movieGenre={MainMovie.GENRE}
        movieYear={MainMovie.YEAR}
      />
    </Provider>,
    document.querySelector(`#root`)
);
