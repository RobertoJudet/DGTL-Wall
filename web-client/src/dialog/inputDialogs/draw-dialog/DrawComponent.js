import React from 'react';

import CanvasDraw from 'react-canvas-draw';
import { TwitterPicker } from 'react-color';
import './drawComponent.css';

export default class DrawComponent extends React.Component {
  constructor() {
    super();
  }
  state = {
    color: '#ffc600',
    width: 400,
    height: 400
  };

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
  };

  handleChange = () => {
    this.props.setPayload(this.refs.canvas.canvas.toDataURL('image/png'));
  };

  render() {
    return (
      <div className="draw-container" onMouseUp={this.handleChange}>
        <CanvasDraw
          brushColor={this.state.color}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          ref="canvas"
        />
        <TwitterPicker
          color={'#D9E3F0'}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}
