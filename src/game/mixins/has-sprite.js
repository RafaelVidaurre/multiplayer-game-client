import _ from 'lodash';

import assertions from '../assertions.js';

/**
* Has a sprite which can me manipulated
*/
export default (state, spriteName) => {
  let spriteImage;

  assertions.isDefined(spriteName);

  spriteImage = game.cache.getImage(spriteName);

  return {
    sprite: {
      name: state.spriteName,
      image: spriteImage
    }
  };
}
