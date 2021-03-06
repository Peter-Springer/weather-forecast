import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root-reducer';

require("!style!css!sass!./style/styles.scss");

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f);

let store = createStore(rootReducer, {}, enhancer);

render(
  <Provider store={store}>
    <Routes history={browserHistory}/>
  </Provider>, document.getElementById('root'))
