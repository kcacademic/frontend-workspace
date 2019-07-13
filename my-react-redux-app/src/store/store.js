import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/reducer";

function configureStore(state, sagaMiddleware) {
  return createStore(reducer, state, compose(applyMiddleware(sagaMiddleware)));
}

export default configureStore;
