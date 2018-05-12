import React from 'react';

import HttpService from './../../http-service';
export default class SaveComponent extends React.Component {
  render() {
    const { type, payload } = this.props;
    let ResultComponent = null;

    HttpService.post('url', { data: { type: type, masa: payload } }).then(
      response => {
        ResultComponent = <div> success </div>;
      },
      fail => {
        ResultComponent = <div> FAIL </div>;
      }
    );
    console.log(this.props);
    return <div className="emptyLoader">{ResultComponent}</div>;
  }
}
