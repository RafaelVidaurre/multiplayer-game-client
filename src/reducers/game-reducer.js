import combineReducers from 'redux';

import emptyGrid from '../fixtures/empty-grid.js';

import { MATCH_ADD_ENTITY } from '../actions/match-actions.js';
import { START_GAME } from '../actions/global-actions.js';

const GAME_PHASES = {
  OFF: 'OFF',
  STARTING: 'STARTING',
  MATCH: 'MATCH'
};

const INITIAL_GAME_STATE = {
  phase: GAME_PHASES.OFF
};

export default function (state = INITIAL_GAME_STATE, action) {
  switch (action.type) {
    case START_GAME:
      return Object.assign(state, {
        phase: GAME_PHASES.STARTING
      });
    break;
    default:
      return state;
    break;
  }
}
