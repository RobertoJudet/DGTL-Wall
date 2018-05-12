import React from 'react';
import ImagesUploader from 'react-images-uploader';
import './imageComponentFonts.css';
import './imageComponentStyles.css';
const serverUrl = 'http://localhost:3069/papirs';
export default class ImageComponent extends React.Component {
  render() {
    return (
      <ImagesUploader
        url={serverUrl}
        optimisticPreviews
        multiple={false}
        onLoadEnd={err => {
          if (err) {
            console.error(err);
          }
        }}
        label="Hai pune poza aia aici odata :)"
      />
    );
  }
}
