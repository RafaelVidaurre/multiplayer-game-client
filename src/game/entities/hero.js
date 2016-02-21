import assertions from '../assertions.js';
import HasSprite from '../mixins/has-sprite.js'; // This will be changed to `hasSpriteSet` soon
import InGrid from '../mixins/in-grid.js';
import data from '../data/data.js';

export default (opts) => {
  let state, defaults, heroData;

  assertions.hasProperty(opts, 'name', 'string');
  heroData = data.get('heroes', opts.name);
  assertions.isDefined(heroData);
  defaults = {};

  state = Object.assign(defaults, {
    name: heroData.name,
    stats: {
      baseHealth: heroData.stats.baseHealth
    }
  });

  return Object.assign(
    {},
    state,
    HasSprite(state, heroData.spriteName),
    InGrid(state)
  );
}
