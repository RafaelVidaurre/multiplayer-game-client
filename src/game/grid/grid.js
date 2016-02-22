import _ from 'lodash';

import listensToStore from '../mixins/listens-to-store.js';

import Tile from '../entities/tile.js';
import { hashToPos } from '../helpers/positioning.js';

export default (opts = {}) => {
  let self;

  self = {
    shouldUpdate (prevState, currentState) {
      if (!prevState) { return false; }
      console.log(prevState.match.grid !== currentState.match.grid);
      return prevState.match.grid !== currentState.match.grid;
    },
    update (state) {
      let tileSprite;
      console.log('Rendering grid!');
      console.log(state.match.grid);

      self.renderGrid(state.match.grid);
    },
    renderGrid (grid) {
      let tiles;

      tiles = [];

      _.each(grid, function (gridTile, key) {
        let tile, x, y, z;
        console.log(hashToPos(key))

        tile = Tile({pos: hashToPos(key)});
        tile.graphic.render();
      });

    }
  };

  return Object.assign(
    {},
    self,
    listensToStore(self)
  );
};
