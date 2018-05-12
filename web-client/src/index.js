import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function runApp(data, settings){
    const root = document.getElementById('root');
    const middleOfScreen = computeMiddleOfCanvas(settings);

    //set content height and width
    root.style.width = `${settings.canvasWidth}px`;
    root.style.height = `${settings.canvasHeight}px`;

    //scroll to middle of screen
    // window.setTimeout(function(){
    //     window.scrollTo(middleOfScreen.x, middleOfScreen.y);
    // }, 1000)
    //TODO: Scroll to middle of screen;
   

    //render app
    ReactDOM.render(<App data={data} settings={settings} />, root);
}

function computeMiddleOfCanvas(settings) {
    const { canvasWidth, canvasHeight } = settings;
    const screenWidth = window.outerWidth;
    const screenHeight = window.outerHeight;

    return {
        x: canvasWidth/2 + screenWidth/2,
        y: canvasHeight/2 + screenHeight/2
    }
}

const data = [{
    
}];

const settings = {
    canvasWidth: 10100,
    canvasHeight: 10000
}

//replace this with real server call
window.setTimeout(function(){
    runApp(data, settings)
}, 100)


