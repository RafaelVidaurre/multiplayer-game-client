import createJs from 'create-js';

const HEX_SIDES = 6;
const HEX_WIDTH = 64;
const HEX_HEIGHT = HEX_WIDTH / 2;

export default class Grid {
  constructor (width, height) {
    console.log(`created grid with width: ${width} and height: ${height}`);

    this.createHex(100, 100);

    stage.update();
  }

  createHex (x, y, width = HEX_WIDTH, height = HEX_HEIGHT, strokeColor = '#333') {
    let hex;

    width = width / 2;
    hex = new createJs.Shape();
    hex.graphics
      .beginStroke('#333')
      .beginFill('#aaa')
      .drawPolyStar(x, y, width, HEX_SIDES, 0, 30);

    stage.addChild(hex);
  }
};
