import { combineReducers } from 'redux';

import matchReducer from './match-reducer.js';
import gameReducer from './game-reducer.js';

export default combineReducers({
  game: gameReducer,
  match: matchReducer
});
