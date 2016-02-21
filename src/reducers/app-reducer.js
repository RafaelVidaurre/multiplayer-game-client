import { combineReducers } from 'redux';

import matchReducer from './match-reducer.js';

export default combineReducers({
  match: matchReducer
});
