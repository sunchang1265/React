import React from 'react';
import ReactDOM from 'react-dom';
function Welcome(props){
    return <h2>Welcome, {props.name}</h2>
}

// const element = <Welcome name="Chang" />
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );

export default Welcome;