import global from 'global';

import listensToStore from '../mixins/listens-to-store.js';

const HEX_WIDTH = 128;
const HEX_HEIGHT = 64;

export default (opts = {}) => {
  let state;

  state = {
    onStateChange: opts.onStateChange
  };

  return Object.assign(
    {},
    state,
    listensToStore(state)
  );
};
