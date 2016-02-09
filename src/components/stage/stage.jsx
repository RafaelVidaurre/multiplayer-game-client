import React from 'react';
import ReactDom from 'react-dom';
import createJs from 'create-js';

import Grid from '../../canvas/grid/grid.js';

export default React.createClass({
  componentDidMount () {
    let stage = new createJs.Stage(ReactDom.findDOMNode(this));

    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
  },
  render () {
    return (
      <canvas id="stage"></canvas>
    );
  }
});
