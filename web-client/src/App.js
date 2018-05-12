import React, { Component } from 'react';
import './App.css';
import DialogComponent from './dialog/DialogComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false
    };
  }

  openDialog = () => this.setState({ isDialogOpen: true });
  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  fillCanvasWithJunk = () => {
    const settings = this.props.settings;
    let junkArray = [];
    for (let i = 0; i < settings.canvasWidth; i += 100) {
      for (let j = 0; j < settings.canvasHeight; j += 100) {
        junkArray.push(<div className="junk" key={`${i}${j}`} />);
      }
    }
    return junkArray;
  };

  render() {
    const { data, settings } = this.props;

    if (this.state.isDialogOpen){
      document.getElementById("root").classList.add("dialog-open");
    }
    else{
      document.getElementById("root").classList.remove("dialog-open");
    }

    return (
      <div className="canvas">
        {/* {this.fillCanvasWithJunk()} */}
        

        {/* Remove button when click event on body is in place */}
        <button
          style={{ position: 'absolute', top: 0, left: 0 }}
          type="button"
          onClick={this.openDialog}
        >
          test dialog
        </button>

        <DialogComponent
          isDialogOpen={this.state.isDialogOpen}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;
