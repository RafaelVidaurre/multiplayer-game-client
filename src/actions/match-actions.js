export const MATCH_SETUP = 'MATCH_SETUP';
export const MATCH_SETUP_START = 'MATCH_SETUP_START';
export const MATCH_SETUP_FINISH = 'MATCH_SETUP_FINISH';

export function matchSetupStart () {
  return {
    type: MATCH_SETUP_START,
    payload: {}
  };
}

export function matchSetupFinish () {
  return {
    type: MATCH_SETUP_FINISH,
    payload: {}
  };
}

export function matchSetup () {
  return function (dispatch) {
    dispatch(matchSetupStart());
    dispatch(matchSetupFinish());

    return Promise.resolve();
  }
}
