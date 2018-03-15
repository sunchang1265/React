import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import Clock from './clock';
import Toggle from './Toggle';
import App from './App.js';
import LoginControl from './LoginControl/LoginControl';

const arr = [1, 2, 3];
const test = () => console.log(...arr);
window.test = test;

ReactDOM.render(
    <div>
        <App />
        <Clock />
        <Toggle name="Test"/>
        <LoginControl />
    </div>, 
    document.getElementById("root")
);