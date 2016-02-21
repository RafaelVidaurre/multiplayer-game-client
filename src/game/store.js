import appReducer from '../reducers/app-reducer.js';
import { createStore } from 'redux';

let store;

store = createStore(appReducer);

export default store;
