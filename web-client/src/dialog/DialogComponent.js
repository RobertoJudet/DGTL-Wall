import React from 'react';
import './dialog.css';
import Dialog from 'react-dialog';
import imageUploadIco from '../assets/image-upload-logo.ico';
import drawIco from '../assets/draw-logo.svg';
import youtubeIco from '../assets/youtube-logo.svg';
import DrawComponent from './inputDialogs/draw-dialog/DrawComponent';
import ImageComponent from './inputDialogs/image-dialog/ImageComponent';
import YouTubeComponent from './inputDialogs/youtube-dialog/YouTubeComponent';

const PickDialog = props => {
  const { stimuliSelectEvent } = props;
  return (
    <div className="stimuli-container">
      <div className="stimuli-option" onClick={stimuliSelectEvent.imageClick}>
        <img alt="logo" src={String(imageUploadIco)} />
      </div>
      <div className="stimuli-option" onClick={stimuliSelectEvent.drawClick}>
        <img alt="logo" src={String(drawIco)} />
      </div>
      <div className="stimuli-option" onClick={stimuliSelectEvent.youtubeClick}>
        <img alt="logo" src={String(youtubeIco)} />
      </div>
    </div>
  );
};

const ImageDialog = () => <ImageComponent />;
const DrawDialog = () => <DrawComponent />;
const YouTubeDialog = () => <YouTubeComponent />;

export default class DialogComponent extends React.Component {
  constructor() {
    super();

    this.state = { type: 0 };
  }

  getDialogSize = () => {
    let height = window.innerHeight / 1.3;
    let width = window.innerWidth / 1.3;

    if (window.innerWidth < 700) {
      width = window.innerWidth;
      height = window.innerHeight;
    }

    return {
      width: width,
      height: height
    };
  };

  getDialogView = (isDialogOpen, handleClose) => {
    if (!isDialogOpen) return null;

    const { width, height } = this.getDialogSize();

    const stimuliSelectEvent = {
      imageClick: this.imageClick,
      drawClick: this.drawClick,
      youtubeClick: this.youtubeClick
    };

    let currentDialogView;

    switch (this.state.type) {
      case 0:
        currentDialogView = (
          <PickDialog stimuliSelectEvent={stimuliSelectEvent} />
        );
        break;
      case 1:
        currentDialogView = <ImageDialog />;
        break;
      case 2:
        currentDialogView = <DrawDialog />;
        break;
      case 3:
        currentDialogView = <YouTubeDialog />;
        break;
      default:
        currentDialogView = (
          <PickDialog stimuliSelectEvent={stimuliSelectEvent} />
        );
        break;
    }

    return (
      <Dialog
        title="Ce postezi pe wall?"
        modal={true}
        onClose={handleClose}
        height={height}
        width={width}
      >
        {currentDialogView}
      </Dialog>
    );
  };

  imageClick = () => {
    this.setState({ type: 1 });
  };
  drawClick = () => {
    this.setState({ type: 2 });
  };
  youtubeClick = () => {
    this.setState({ type: 3 });
  };

  render() {
    const { isDialogOpen, handleClose } = this.props;
    return this.getDialogView(isDialogOpen, () => {
      this.setState({ type: 0 });
      handleClose();
    });
  }
}
