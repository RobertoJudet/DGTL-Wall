import React from 'react';
import YouTube from 'react-youtube';

export default class YouTubePlayer extends React.Component {
  render() {
    const opts = {
      height: '195',
      width: '320',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const config = this.props.config;

    const style = {
      top: config.y,
      left: config.x
  }
    return (<div className="postWrap" style={style}>
      <YouTube videoId={config.content} opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
