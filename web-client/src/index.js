import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpService from './http-service'

function runApp(data, settings){
    const root = document.getElementById('root');
    const middleOfScreen = computeMiddleOfCanvas(settings);

    //set content height and width
    root.style.width = `${settings.canvasWidth}px`;
    root.style.height = `${settings.canvasHeight}px`;

    window.scrollTo(middleOfScreen.x, middleOfScreen.y);
   
    //render app
    ReactDOM.render(<App data={data} settings={settings} />, root);
}

function computeMiddleOfCanvas(settings) {
    const { canvasWidth, canvasHeight } = settings;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return {
        x: canvasWidth/2 - screenWidth/2,
        y: canvasHeight/2 - screenHeight/2
    }
}

const settings = {
    canvasWidth: 2100,
    canvasHeight: 2000
}

HttpService.get().then(
    response => {
      let data = response.data.map((item) => {
        return {
            x: item.x,
            y: item.y,
            content: item.content,
            type: item.type
        }
      });

      console.log("posts: ", data);

      runApp(data, settings);
    }
  );


