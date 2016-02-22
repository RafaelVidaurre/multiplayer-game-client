import hasGraphic from '../mixins/has-graphic.js';

// tileSprite = game.add.sprite(0, 0, 'grid.tile');
// tileSprite.anchor.x = 0.5;
// tileSprite.anchor.y = 0.5;

export default (opts = {}) => {
  let self;

  self = {
    pos: {
      x: opts.pos.x,
      y: opts.pos.y,
      z: opts.pos.z
    }
  };

  return Object.assign(
    {},
    self,
    hasGraphic(self, 'grid.tile')
  )
}
