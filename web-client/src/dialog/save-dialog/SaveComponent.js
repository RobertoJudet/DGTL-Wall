import React from 'react';

import HttpService from './../../http-service';
export default class SaveComponent extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  componentDidMount() {
    const { type, payload, coordonates } = this.props;
     
    console.log(this.props);
    HttpService.post({ data: { 
      type: type, 
      content: payload, 
      x: coordonates.x, 
      y: coordonates.y, 
      key: 'sheep' 
    } }).then(
      response => {
        console.log(response);
        this.setState({
          done: "success",
          message: "Success! Page will refresh in 2 seconds..."
        }, () => {
          window.setTimeout(() => {
            window.location.reload();
          }, 2000); // TODO reload with coordonates
        });
      },
      fail => {
        console.log(fail);
        this.setState({
          done: "fail",
          message: "Error! Something went wrong :("
      });
      }
    );
  }
  render() {

    return <div className="emptyLoader">
      { this.state && this.state.done &&
        <div className = {this.state.done} > 
          {this.state.message}
        </div>
      }
    </div>;
  }
}
