import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import appReducer from '../reducers/app-reducer.js';

let store, loggerMiddleware;

loggerMiddleware = createLogger();

store = createStore(
  appReducer,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
);

export default store;
