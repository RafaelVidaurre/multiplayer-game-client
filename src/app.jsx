import React from 'react';
import Stage from './components/stage/stage.jsx';
import Grid from './canvas/grid/grid.js';

export default React.createClass({
  componentDidMount () {
    new Grid(16, 16);
  },
  render () {
    return (
      <div id="app">
        <Stage/>
      </div>
    );
  }
});
