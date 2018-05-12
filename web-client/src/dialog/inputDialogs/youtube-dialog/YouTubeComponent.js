import React from 'react';
import SimpleInput from 'react-simple-input';
import getYouTubeID from 'get-youtube-id';
import './youTubeComponent.css';

export default class YouTubeComponent extends React.Component {
  handleSubmit = event => {
    var id = getYouTubeID(event.target.value);
    if (id !== null) {
      this.props.setPayload(id);
    }
  };

  render() {
    return (
      <div className="youtube-container">
        <span>Paste your youtube link here:</span>
        <SimpleInput changeTimeout={500} onChange={this.handleSubmit} />
      </div>
    );
  }
}
