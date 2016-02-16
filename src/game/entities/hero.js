import HasSprite from '../has-sprite.js';
import InGrid from '../in-grid.js';

module.exports = (opts) -> {
  let state, defaults;

  defaults = {};

  state = Object.assign(defaults, {
    opts.name
  });

  return Object.assign(
    {},
    HasSprite(state)
    InGrid(state),
  )
};
