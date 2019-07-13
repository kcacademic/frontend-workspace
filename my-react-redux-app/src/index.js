import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import App from './App';
import * as serviceWorker from './serviceWorker';

import { watcherSaga } from "./sagas/sagas";
import createSagaMiddleware from "redux-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with reducer and middleware
const store = configureStore({ url:[] }, sagaMiddleware);

// run the saga
sagaMiddleware.run(watcherSaga);

// changed the render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// unregister service worker
serviceWorker.unregister();

module.hot.accept();