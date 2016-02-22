import _ from 'lodash';

export const HEX_WIDTH = 128;
export const HEX_HEIGHT = 64;

/**
* Converts cubic hex coordinates into screen pixels
*/
export function hexToWorld (x, y, z) {
  let w, h, hY, hX, hZ, wX, wY;

  hX = -x * 0.25 * HEX_HEIGHT;
  hY = -y * 0.25 * HEX_HEIGHT;
  hZ = z * 0.25 * HEX_WIDTH;
  wX = x * 0.5 * HEX_WIDTH;
  wY = -y * 0.5 * HEX_WIDTH;
  h = hX + hY + hZ;
  w = wX + wY;

  return {x: w, y: h};
}

export function hashToPos (hash) {
  let splits;

  splits = _.map(hash.split(','), str => parseInt(str, 10));

  return {
    x: splits[0],
    y: splits[1],
    z: splits[2]
  };
}

export function posToHash (x, y, z) {

}
