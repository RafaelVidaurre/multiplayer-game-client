import _ from 'lodash';

import assertions from '../assertions.js';
import { hexToWorld } from '../helpers/positioning.js';

/**
* Has a sprite which can be rendered and positioned
*/
export default (base, spriteName) => {
  let spriteImage, self, spriteInstance;

  assertions.isDefined(spriteName);

  spriteImage = game.cache.getImage(spriteName);

  self = {
    graphic: {
      name: spriteName,
      image: spriteImage,
      render: function (anchorX = 0.5, anchorY = 0.5) {
        let worldPos;

        if (spriteInstance) {
          spriteInstance.destroy();
        }

        worldPos = hexToWorld(base.pos.x, base.pos.y, base.pos.z);
        spriteInstance = game.add.sprite(worldPos.x, worldPos.y, spriteName);
        console.log(worldPos)
        spriteInstance.anchor.x = anchorX;
        spriteInstance.anchor.y = anchorY;

        console.log(spriteInstance);
      }
    }
  };

  return self;
}
