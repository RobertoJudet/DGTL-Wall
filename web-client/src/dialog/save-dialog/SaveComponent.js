import React from 'react';

import HttpService from './../../http-service';
export default class SaveComponent extends React.Component {
  render() {
    const { type, payload } = this.props;
    let ResultComponent = null;

    // let getData = () => {
    //   var newRequest = new FormData();

    //   newRequest.set('type', type);
    //   newRequest.set('content', payload);
    //   newRequest.set('x', '0');
    //   newRequest.set('y', '0');
    //   newRequest.set('key', 'sheep');
    //   return newRequest;
    // }

    HttpService.post({ data: { type: type, content: payload, x: '0', y: '0', key: 'sheep' } }).then(
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
