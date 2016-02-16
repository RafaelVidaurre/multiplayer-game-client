import Position from '../position.js';

module.exports = (opts) -> {
  let state, defaults;

  defaults = {};

  state = Object.assign(defaults, {
    opts.name
  });

  return Object.assign(
    {},
    Position(state)
  )
};
