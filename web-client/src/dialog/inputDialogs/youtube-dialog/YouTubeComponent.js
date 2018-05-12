import React from 'react';
import SimpleInput from 'react-simple-input';
import getYouTubeID from 'get-youtube-id';
export default class YouTubeComponent extends React.Component {
  handleSubmit = state => {
    debugger;
    var youtubeId = getYouTubeID(state.nativeEvent.data);
    if (youtubeId !== null) {
      console.log(youtubeId);
    }
  };

  render() {
    return <SimpleInput changeTimeout={500} onChange={this.handleSubmit} />;
  }
}
