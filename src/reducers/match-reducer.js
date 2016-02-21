import combineReducers from 'redux';

import { START_MATCH } from '../actions/match-actions.js';
import emptyGrid from '../fixtures/empty-grid.js';

const MATCH_PHASES = {
  OFF: 'OFF',
  START: 'START'
};
const INITIAL_MATCH_STATE = {
  currentPhase: MATCH_PHASES.OFF,
  grid: {}
};

export default function (state = INITIAL_MATCH_STATE, action) {
  switch (action.type) {
    case START_MATCH:
      return Object.assign({},
        state,
        {
          phase: MATCH_PHASES,
          grid: emptyGrid()
        }
      );
    break;
    default:
      return state;
    break;
  }
}
