import assertions from '../assertions/has-property';
import HasSprite from '../has-sprite.js'; // This will be changed to `hasSpriteSet` soon
import InGrid from '../in-grid.js';

module.exports = (opts) -> {
  let state, defaults;

  assertions.hasProperty(opts, 'spriteName', 'string');

  defaults = {};

  state = Object.assign(defaults, {
    opts.name
  });

  return Object.assign(
    {},
    HasSprite(state, opts.spriteName)
    InGrid(state)
  )
};
