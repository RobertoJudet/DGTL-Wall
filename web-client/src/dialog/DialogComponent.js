import React from 'react';
import './dialog.css';
import Dialog from 'react-dialog';
import imageUploadIco from '../assets/image-upload-logo.ico';
import drawIco from '../assets/draw-logo.svg';
import youtubeIco from '../assets/youtube-logo.svg';
import DrawComponent from './inputDialogs/draw-dialog/DrawComponent';
import ImageComponent from './inputDialogs/image-dialog/ImageComponent';

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
const YouTubeDialog = () => <div>youtube</div>;

export default class DialogComponent extends React.Component {
  constructor() {
    super();

    this.state = { type: 0 };
  }

  getDialogView = (isDialogOpen, handleClose) => {
    if (!isDialogOpen) return null;

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
      <Dialog title="Ce postezi pe wall?" modal={true} onClose={handleClose}>
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
