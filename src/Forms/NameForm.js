import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            essayValue: 'Please write an essay about your favorite DOM element.',
            isGoing: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target);
        // this.setState({ value: event.target.value });
        this.setState({
            [name]: value //Computed property names, use with [] and expression in it
        })
        //equivalent to
        // var partialState = {};
        // partialState[name] = value;
        // this.setState(partialState);
        //
    }

    // handleEssayChange(event) {
    //     this.setState({ essayValue: event.target.value });
    // }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value + '\n' +
            'An essay was submitted: ' + this.state.essayValue + '\n' +
            'Check box is: ' + (this.state.isGoing ? 'Checked' : 'Not Checked')
        );
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                    Essay:
                    <textarea value={this.state.essayValue} onChange={this.handleChange} />
                </label>

                <label>
                    {this.state.isGoing ? 'Is Checked' : 'Not Checked'}
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;