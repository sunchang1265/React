import React from 'react';
import ReactDOM from 'react-dom';
function Welcome(props){
    return [
        <h2 className="primary">Welcome, {props.name}</h2>,
        <h3 className="secondary"> Hello, {props.name}</h3>
    ]
}

// const element = <Welcome name="Chang" />
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );

export default Welcome;