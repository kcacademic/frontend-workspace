import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import configureStore from "./store/store";
import createSagaMiddleware from "redux-saga";

configure({adapter: new Adapter()});

describe('App', () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({ url:[] },sagaMiddleware);

  it('renders without crashing', () => {
    const component = shallow(<App store={store} />);
    expect(component).toMatchSnapshot();
  });
});
