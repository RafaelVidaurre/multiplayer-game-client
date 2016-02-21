import combineReducers from 'redux';

import { MATCH_ADD_ENTITY } from '../actions/match-actions.js';
import emptyGrid from '../fixtures/empty-grid.js';

const START_PHASE = 'START_PHASE';
const INITIAL_MATCH_STATE = {
  currentPhase: START_PHASE,
  grid: emptyGrid()
};

export default function (state = INITIAL_MATCH_STATE, action) {
  switch (action.type) {
    case MATCH_ADD_ENTITY:
      // Here we should add an entity
      return state;
    break;
    default:
      return state;
    break;
  }
}
