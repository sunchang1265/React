import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

const App = ()=>{
    return (
        <div>
            <Welcome name="Chang" />
            <Welcome name="Fan" />
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));