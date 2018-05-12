import React from 'react';
import './dialog.css';
import Dialog from 'react-dialog'

export default class DialogComponent extends React.Component {

    render() {
        const { isDialogOpen, handleClose } = this.props;
        const dialog = isDialogOpen ? <Dialog
            title="Titlu"
            modal={true}
            onClose={handleClose}
        >
            <h1>THis will be the content</h1>
            <p>yeeeep</p>
        </Dialog> : null;

        return dialog;

    }


}


