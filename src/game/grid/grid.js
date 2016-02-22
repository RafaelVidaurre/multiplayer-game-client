import global from 'global';

import listensToStore from '../mixins/listens-to-store.js';

const HEX_WIDTH = 128;
const HEX_HEIGHT = 64;

export default (opts = {}) => {
  let self;

  self = {
    shouldUpdate (prevState, currentState) {
      if (!prevState) { return false; }
      console.log(prevState.match.grid !== currentState.match.grid);
      return prevState.match.grid !== currentState.match.grid;
    },
    update (state) {
      console.log('Rendering grid!');
      console.log(state.match.grid);
    }
  };

  return Object.assign(
    {},
    self,
    listensToStore(self)
  );
};
