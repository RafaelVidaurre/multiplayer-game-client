import combineReducers from 'redux';

import {
  MATCH_SETUP_START,
  MATCH_SETUP_FINISH
} from '../actions/match-actions.js';

import emptyGrid from '../fixtures/empty-grid.js';

const MATCH_PHASES = {
  OFF: 'OFF',
  SETUP_STARTED: 'SETUP_STARTED',
  SETUP_FINISHED: 'SETUP_FINISHED'
};
const INITIAL_MATCH_STATE = {
  phase: MATCH_PHASES.OFF,
  grid: {}
};

export default function (state = INITIAL_MATCH_STATE, action) {
  switch (action.type) {
    case MATCH_SETUP_START:
      return Object.assign({},
        state,
        {
          phase: MATCH_PHASES.SETUP_STARTED,
          grid: emptyGrid()
        }
      );
    break;
    case MATCH_SETUP_FINISH:
      return Object.assign({},
        state,
        {
          phase: MATCH_PHASES.SETUP_FINISHED,
        }
      );
    break;
    default:
      return state;
    break;
  }
}
