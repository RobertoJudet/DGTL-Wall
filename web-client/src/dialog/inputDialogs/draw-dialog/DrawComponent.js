import React from 'react';

import CanvasDraw from 'react-canvas-draw';

export default class DrawComponent extends React.Component {
  constructor() {
    super();
  }
  state = {
    color: '#ffc600',
    width: 400,
    height: 400
  };

  render() {
    return (
      <CanvasDraw
        brushColor={this.state.color}
        canvasWidth={this.state.width}
        canvasHeight={this.state.height}
      />
    );
  }
}
