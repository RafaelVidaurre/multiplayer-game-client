import _ from 'lodash';

import assertions from '../assertions.js';

/**
* Has a sprite which can me manipulated
*/
module.exports = (state) -> {
  let sprite;

  assertions.hasProperty(state, 'spriteName', 'String');

  spriteImage = game.cache.getImage(state.spriteName);

  return {
    sprite: {
      name: state.spriteName,
      image: spriteImage
    }
  };
);
