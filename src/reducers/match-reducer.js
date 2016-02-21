import combineReducers from 'redux';

import {MATCH_ADD_ENTITY} from '../actions/match-actions.js';

export default function (state = {}, action) {
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
