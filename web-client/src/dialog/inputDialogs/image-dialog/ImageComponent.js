import React from 'react';
import axios from 'axios';

import './image-dialog.css';

export default class ImageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: "./images/Team-icon-placeholder.png"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  _imageEncode = (arrayBuffer) => {
    let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
    let mimetype = "image/jpeg"
    return "data:" + mimetype + ";base64," + b64encoded
  }

  handleChange(event) {
    if (event.target.files.length === 0) return null;
    var blobRaw = URL.createObjectURL(event.target.files[0]);

    axios.get(blobRaw, { responseType: 'arraybuffer' }).then((request) => {
      this.setState({
        file: this._imageEncode(request.data)
      }, () => {
        this.props.setPayload(this.state.file);
      });
    });

  }

  handleUpload = () => {
    console.log(this.state.file);
  }


  render() {
    return (
        <div>
          <div className="logoContainer">
            <img src={this.state.file} alt="insert pic here" />
          </div>
            <div className="fileContainer sprite">
              <span>Choose Image </span>
              <input type="file" onChange={this.handleChange} />
            </div>
        </div>
          );
        }
      }
