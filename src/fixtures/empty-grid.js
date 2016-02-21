import _ from 'lodash';
import emptyTile form './empty-tile.js';

export default () => {
  let gridTiles, mapObject;

  gridTiles = [
    '0,4,-4', '1,3,-4', '2,2,-4', '3,1,-4', '4,0,-4',
    '-1,4,-3', '0,3,-3', '1,2,-3', '2,1,-3' ,'3,0,-3', '4,-1,-3',
    '-2,4,-2', '-1,3,-2', '0,2,-2', '1,1,-2', '2,-1,-2', '3,-2,-2', '4,-3,-2',
    '-3,4,-1', '-2,3,-1', '-1,2,-1', '0,1,-1', '1,0,-1', '2,-1,-1', '3,-2,-1', '4,-3,-1',
    '-5,5,0', '-4,4,0', '-3,3,0', '-2,2,0','-1,1,0', '0,0,0', '1,-1,0', '2,-2,0', '3,-3,0', '4,-4,0', '5,-5,0',
    '-4,3,1', '-3,2,1', '-2,1,1', '-1,0,1', '0,-1,1'. '1,-2,1', '2,-3,1', '3,-4,1',
    '-4,2,2', '-3,1,2', '-2,0,2', '-1,-1,2', '0,-2,2', '1,-3,2', '2,-4,2',
    '-4,1,3', '-3,0,3','-2,-1,3', '-1,-2,3', '0,-3,3', '1,-4,3',
    '-5,-1,4', '-4,-2,4', '-3,-3,4', '-2,-4,4', '-1,-5,4'
  ];

  _.each(gridTiles, (tile) => { mapObject[tile] = emptyTile(); });

  return mapObject;
}
