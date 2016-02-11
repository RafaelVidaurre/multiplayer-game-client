import global from 'global';

const HEX_WIDTH = 128;
const HEX_HEIGHT = HEX_WIDTH / 2;

/**
* Grid which saves the match state
*/
export default class Grid {
  /**
  * @constructor
  *
  * @param {Number} width number of tiles per row
  * @param {Number} height number of rows in the grid
  * @param {Number} hexWidth horizontal size of a tile
  * @param {Number} hexHeight vertical size of a tile
  */
  constructor (width, height) {
    console.log(`created grid with width: ${width} and height: ${height}`);

    this.width = width;
    this.height = height;

    this._createHexagons();
  }

  /**
  * Builds the entire grid, creating hexagons and saves tiles in its own store
  */
  _createHexagons () {
    let gridTemplate, rows;

    gridTemplate = [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      12,
      11,
      10,
      9,
      8,
      7
    ];
    rows = gridTemplate.length;

    for (let row = 0; row < rows; row ++) {
      let cols;

      cols = gridTemplate[row];

      for (let col = 0; col < cols; col ++) {
        let x, y, xOffset, yOffset;

        xOffset = HEX_WIDTH * cols / 2;
        yOffset = ((HEX_HEIGHT * 0.75) * rows) / 2;
        x = col * HEX_WIDTH - xOffset;
        y = row * HEX_HEIGHT * 0.75 - yOffset;

        console.log(x);
        console.log(y);

        this._createHexagon(x, y);
      }
    }
  }

  /**
  * Creates a single hexagon
  *
  * @param {Number} x Horizontal location
  * @param {Number} y Vertical location
  * @params {Integer} fillColor fill color of the hexagon
  * @returns {Phaser.Graphics} graphics instance of the hexagon
  */
  _createHexagon (x, y) {
    let hex, hexSprite;

    hexSprite = game.cache.getImage('grid.tile');
    hex = game.add.sprite(x, y, 'grid.tile');
    hex.anchor.setTo(0.5, 0.5);

    return hex;
  }

  /**
  * Creates geometrical points for a hexagon
  *
  * @param {Number} i index of point
  * @param {Number} size size of the hexagon
  * @returns {Array} array of Point instances
  */
  _getHexPoints (i, size = 64) {
    let deg, rad, x, y, width, height;

    deg = 60 * i + 30;
    rad = Math.PI / 180 * deg;
    x = (size / 2) * Math.cos(rad);
    y = (size / 2) * Math.sin(rad);

    return new Phaser.Point(x, y);
  }
};
