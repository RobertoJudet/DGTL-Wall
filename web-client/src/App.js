import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DialogComponent from './dialog/DialogComponent'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false
    }
  }

  openDialog = () => this.setState({ isDialogOpen: true })
  handleClose = () => this.setState({ isDialogOpen: false })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button type="button" onClick={this.openDialog}>test dialog</button>
        <DialogComponent
          isDialogOpen={this.state.isDialogOpen}
          handleClose={this.handleClose}
        >
        </DialogComponent>
      </div>
    );
  }
}

export default App;
