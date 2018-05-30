import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deadLine: 'December 25, 2018',
            newDeadLine: ''
        }
    }

    changeDeadline() {
        console.log('State: ', this.state)
        this.setState({deadLine: this.state.newDeadLine})
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">Countdown to { this.state.deadLine } </div>
                <div>
                    <Clock 
                        deadline={this.state.deadLine}
                    />
                </div>
                <Form inline>
                    <FormControl
                    placeholder="new date"
                    className="Deadline-input"
                    onChange={event => this.setState({ newDeadLine: event.target.value }) }
                    />
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        ) 
    }
}

export default App;