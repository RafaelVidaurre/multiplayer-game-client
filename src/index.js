import './styles/base.scss';
import tileSpr from './assets/tile.png';

import ReactDom from 'react-dom';
import React from 'react';
import Phaser from 'phaser';
import _ from 'lodash';
import global from 'global';

import Grid from './game/grid/grid.js';
import store from './store.js';

global.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {
  init () {
    let maxCameraBounds = {
      x: 1920,
      y: 960
    };
    global.game.camera.bounds.width = maxCameraBounds.x;
    global.game.camera.bounds.height = maxCameraBounds.y;
    global.game.camera.bounds.x = - maxCameraBounds.x / 2;
    global.game.camera.bounds.y = - maxCameraBounds.y / 2;
    global.game.camera.x = 0;
    global.game.camera.y = 0;

  },
  preload () {
    game.load.image('grid.tile', tileSpr);
  },
  create () {
    let grid = new Grid(10, 10);
  },
  update () {

  }
});
