import React from 'react';

export default class ImagePost extends React.Component {


    render(){
        const { config } = this.props;
        const style = {
            top: config.y,
            left: config.x
        }
        return <div className="postWrap" style={style}>
         <img src={config.content} alt="post" />
        </div> 
    }
}