import {createStore, combineReducers} from 'redux';

import userReducer from './reducers/user-reducer.js';

let appReducer = combineReducers({
  user: userReducer
});

let store = createStore(appReducer);
