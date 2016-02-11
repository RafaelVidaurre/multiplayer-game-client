import './styles/base.scss';

import ReactDom from 'react-dom';
import React from 'react';
import Phaser from 'phaser';
import _ from 'lodash';

import Grid from './game/grid/grid.js';
import store from './store.js';

function hexPoint (i, size = 64) {
  let deg, rad, x, y;

  deg = 60 * i + 30;
  rad = Math.PI / 180 * deg;
  x = center_x + size * Math.cos(rad);
  y = center_y + size * Math.sin(rad);

  return new Phaser.Point(x, y);
}

window.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {
  init () {

  },
  preload () {

  },
  create () {
    let poly, graphics;

    graphics = game.add.graphics(0, 0);

    let hexPoints = _.map([0, 1, 2, 3, 4, 5], function (i) {
      return hexPoint(i);
    });

    console.log(hexPoints);

    graphics.beginFill(0xffffff);
    graphics.drawPolygon(hexPoints);
    graphics.endFill();

  },
  update () {

  }
});
