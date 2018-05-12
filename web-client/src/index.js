import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

const data = [{
    
}];

const settings = {
    canvasWidth: 2100,
    canvasHeight: 2000
}

//replace this with real server call
window.setTimeout(function(){
    runApp(data, settings)
}, 1000)


