import combineReducers from 'redux';
import store from '../game/store.js';

import emptyGrid from '../fixtures/empty-grid.js';

import {
  GAME_SETUP_START,
  GAME_SETUP_FINISH
} from '../actions/game-actions.js';

const GAME_PHASES = {
  OFF: 'OFF',
  SETUP_STARTED: 'SETUP_STARTED',
  SETUP_FINISHED: 'SETUP_FINISHED',
  MATCH: 'MATCH'
};

const INITIAL_GAME_STATE = {
  phase: GAME_PHASES.OFF
};

export default function (state = INITIAL_GAME_STATE, action) {
  switch (action.type) {
    case GAME_SETUP_START:
      return Object.assign(
        {},
        state,
        {
          phase: GAME_PHASES.SETUP_STARTED
        }
      );
    break;
    case GAME_SETUP_FINISH:
      return Object.assign(
        {},
        state,
        {
          phase: GAME_PHASES.SETUP_FINISHED
        }
      );
    break;
    default:
      return state;
    break;
  }
}
