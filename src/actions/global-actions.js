export const START_GAME = 'START_GAME';
export const START_MATCH = 'START_MATCH';

export function startGame () {
  return {
    type: START_GAME,
    payload: {}
  };
}

export function startMatch () {
  return {
    type: START_MATCH,
    payload: {}
  };
}
