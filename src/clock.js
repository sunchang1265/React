import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // Wrong
        //this.state.date = new Date();

        //Right
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>This is a clock</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
            </div>
        );
    }
}

export default Clock;