import React from 'react';
import Form from 'react-input';
export default class YouTubeComponent extends React.Component {
  handleSubmit = state => {
    var getYouTubeID = require('get-youtube-id');

    var id = getYouTubeID(state.youtube);
    if (id !== null) {
      console.log(id); // "9bZkp7q19f0"
    }
  };

  render() {
    return (
      <Form
        fields={[
          {
            name: '',
            key: 'youtube',
            type: 'link',
            error: false,
            required: false,
            placeholder: 'Enter youtube link',
            onChange: value => {
              // handle a changed value on the input
            },
            renderAfter: () => <div />,
            renderBefore: () => <div>Drop your Youtube LInk</div>
          }
          // additional inputs to include in the form
        ]}
        onChange={this.handleSubmit}
      />
    );
  }
}
