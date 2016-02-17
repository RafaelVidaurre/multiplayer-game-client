import assertions from '../assertions.js';
import HasSprite from '../components/has-sprite.js'; // This will be changed to `hasSpriteSet` soon
import InGrid from '../components/in-grid.js';
import data from '../data/data.js';

module.exports = (name) => {
  let state, defaults, heroData;

  heroData = data.get('heroes', name);

  assertions.hasProperty(heroData, 'spriteName', 'string');

  defaults = {};

  state = Object.assign(defaults, {
    name: heroData.name,
    stats: {
      baseHealth: heroData.baseHealth
    }
  });

  return Object.assign(
    {},
    HasSprite(state, heroData.spriteName),
    InGrid(state)
  );
}
