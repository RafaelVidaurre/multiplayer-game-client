import assertions from '../assertions.js';
import HasSprite from '../components/has-sprite.js'; // This will be changed to `hasSpriteSet` soon
import InGrid from '../components/in-grid.js';
import data from '../data/data.js';

module.exports = (opts) => {
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
    state,
    HasSprite(state, heroData.spriteName),
    InGrid(state)
  );
}
