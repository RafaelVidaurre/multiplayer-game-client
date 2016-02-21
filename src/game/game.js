import tileSpr from '../assets/tile.png';

import Phaser from 'phaser';
import _ from 'lodash';
import global from 'global';

import Grid from './grid/grid.js';
import Hero from './entities/hero.js';
import store from './store.js';

global.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {
  init () {
    let worldBounds = {
      x1: - game.width / 2,
      x2: game.width / 2,
      y1: - game.height / 2,
      y2: game.height / 2,
    };
    game.world.setBounds(worldBounds.x1, worldBounds.y1, worldBounds.x2, worldBounds.y2);
    game.stage.backgroundColor = '#000000';
    game.camera.x = 0;
    game.camera.y = 0;
  },
  preload () {
    game.load.image('grid.tile', tileSpr);
  },
  create () {
    let grid, hero, heroes;

    grid = new Grid();
    game.world.scale.setTo(1, 1);

    hero = Hero({name: 'sample'});

    console.log(store.getState());

  },
  update () {

  }
});
