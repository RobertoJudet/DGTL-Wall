import React, { Component } from 'react';
import './App.css';
import DialogComponent from './dialog/DialogComponent';
import ImagePost from './display/post/ImagePost';
import YouTubePlayer from './display/youtube-player/YouTubePlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false,
      coordonates: {
        x: 0,
        y: 0
      }
    };
  }
  openDialog = (event) => {
    if(!this.state.isDialogOpen){
      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;
  
      console.log("Coordonates: ", x,y);
      this.setState({ 
        isDialogOpen: true,
        coordonates: {
          x: x,
          y: y
        } 
      });
    }
    
  }
  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };
  // fillCanvasWithJunk = () => {
  //   const settings = this.props.settings;
  //   let junkArray = [];
  //   for (let i = 0; i < settings.canvasWidth; i += 100) {
  //     for (let j = 0; j < settings.canvasHeight; j += 100) {
  //       junkArray.push(<div className="junk" key={`${i}${j}`} />);
  //     }
  //   }
  //   return junkArray;
  // };

  fillCanvasWithData = (posts) => {
    return posts.map((post, index) => {
      switch(post.type){
        case "1": case "2": return <ImagePost config={post}/>; break;
        case "3": return <YouTubePlayer config={post}/>; break;
        default: console.log("could not identify post type"); break;
      }
    });
  };

  render() {
    const { data, settings } = this.props;
    const wallData = this.fillCanvasWithData(data);
  
    if (this.state.isDialogOpen) {
      document.getElementById("root").classList.add("dialog-open");
    }
    else {
      document.getElementById("root").classList.remove("dialog-open");
    }

    return (
      <div className="dgtl-wall" onClick={this.openDialog}>
        {wallData}

        <DialogComponent
          isDialogOpen={this.state.isDialogOpen}
          handleClose={this.handleClose}
          coordonates={this.state.coordonates}
        />
      </div>
    );
  }
}

export default App;
