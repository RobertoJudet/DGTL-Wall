import React from 'react';
import './dialog.css';
import Dialog from 'react-dialog'
import imageUploadIco from "../assets/image-upload-logo.ico";
import drawIco from "../assets/draw-logo.svg";
import youtubeIco from "../assets/youtube-logo.svg";

const PickDialog = (props) => {
    const { events } = props;
    return <div className="stimuli-container">
        <div className="stimuli-option" onClick={events.imageClick}>
            <img alt='logo' src={String(imageUploadIco)} />
        </div>
        <div className="stimuli-option">
            <img alt='logo' src={String(drawIco)} />
        </div>
        <div className="stimuli-option">
            <img alt='logo' src={String(youtubeIco)} />
        </div>
    </div>
}

const ImageDialog = () => <div>ImageDialog</div>

export default class DialogComponent extends React.Component {
    constructor() {
        super();

        this.state = { type: 0 };
    }

    getDialogView = (isDialogOpen, handleClose) => {
        if (!isDialogOpen) return null;

        const events = {
            imageClick: this.imageClick
        }

        let currentDialogView;

        switch (this.state.type) {
            case 0: currentDialogView = <PickDialog events={events} />; break;
            case 1: currentDialogView = <ImageDialog />; break;
            default: currentDialogView = <PickDialog events={events} />; break;
        }

        return <Dialog
            title="Ce postezi pe wall?"
            modal={true}
            onClose={handleClose}
        >
            {currentDialogView}
        </Dialog>
    }

    imageClick = () => {
        this.setState({ type: 1 });
    }

    render() {
        const { isDialogOpen, handleClose } = this.props;

        return this.getDialogView(isDialogOpen, handleClose);

    }


}


