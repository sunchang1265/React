import React from 'react';
import ReactDOM from 'react-dom';
import TemperatureInput from './TemperatureInput';

// function tryConvert(t, convert) {
//     const input = parseFloat(t);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }

// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
        this.toCelsius = this.toCelsius.bind(this);
    }
    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    tryConvert(t, convert) {
        const input = parseFloat(t);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

            </div>
        );
    }
}

export default Calculator;