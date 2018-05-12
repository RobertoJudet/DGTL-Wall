import React from 'react';
import SimpleInput from 'react-simple-input';
import getYouTubeID from 'get-youtube-id';
export default class YouTubeComponent extends React.Component {
  handleSubmit = state => {
    debugger;
    var id = getYouTubeID(state.nativeEvent.data);
    if (id !== null) {
      console.log(id); // "9bZkp7q19f0"
    }
  };

  render() {
    return <SimpleInput changeTimeout={500} onChange={this.handleSubmit} />;
  }
}
