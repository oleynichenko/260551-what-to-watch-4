import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from '@components/app/app';
import reducer from "./reducer/reducer";
import {createAPI} from "./api";
import {Operation as DataOperation} from "./reducer/data/data";

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
    )
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadTitleMovie());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
