import createStore from 'redux';
import appReducer from './reducers/app-reducer.js';

let store;

store = createStore(appReducer);
