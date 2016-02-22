import { matchSetup } from './match-actions';

export const GAME_SETUP = 'GAME_SETUP';
export const GAME_SETUP_START = 'GAME_SETUP_START';
export const GAME_SETUP_FINISH = 'GAME_SETUP_FINISH';

export function gameSetupStart () {
  return {
    type: GAME_SETUP_START,
    payload: {}
  };
}

export function gameSetupFinish () {
  return {
    type: GAME_SETUP_FINISH,
    payload: {}
  };
}

export function gameSetup () {
  return function (dispatch) {
    dispatch(gameSetupStart());
    return dispatch(matchSetup()).then(() => dispatch(gameSetupFinish()));
  }
}
