import React from 'react';

import CanvasDraw from 'react-canvas-draw';
import { TwitterPicker } from 'react-color';
import './drawComponent.css';
import FancyButton from 'react-fancy-button';

export default class DrawComponent extends React.Component {
  constructor() {
    super();
  }
  state = {
    color: '#ffc600',
    width: 400,
    height: 400
  };
  save() {
    //this.setState({ isSavingNote: true });
    console.log('saving!');
  }

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div className="draw-container">
        <CanvasDraw
          brushColor={this.state.color}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
        <div className="save-bar">
          <TwitterPicker
            color={'#D9E3F0'}
            onChangeComplete={this.handleChangeComplete}
          />
          <FancyButton
            classes="btn btn--small btn-primary btn--full"
            onClick={this.save}
            disabled={false}
            trigger={this.state.isSavingNote}
            // onDisabledClick={() => this.setState({ showErrors: true })}
            label="Save"
          />
        </div>
      </div>
    );
  }
}
