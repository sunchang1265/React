import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import Clock from './clock';
import Toggle from './Toggle';
import App from './App.js';
import LoginControl from './LoginControl/LoginControl';
import Blog from './Blog';
import NameForm from './Forms/NameForm';
import FlavorForm from './Forms/FlavorForm';
import Calculator from './TempCalculator/Calculator';

const arr = [1, 2, 3];
const test = () => console.log(...arr);
window.test = test;

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

ReactDOM.render(
    <div>
        <App />
        <Clock />
        <Toggle name="Test"/>
        <LoginControl />
        <hr/>
        <Blog posts={posts}/>
        <NameForm />
        <FlavorForm />
        <Calculator />
    </div>, 
    document.getElementById("root")
);