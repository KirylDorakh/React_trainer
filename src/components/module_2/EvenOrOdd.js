import React, {Component} from 'react';
import "../../styles/module_2/EvenOrOdd.css"

class EvenOrOdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parity: null
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput (e){
        !(e.target.value % 2) ? this.setState({parity: 'Even'}):this.setState({parity: 'Odd'})
    }

    render() {
        return (
            <div className="app">
                <input type='number' onChange={this.handleInput}></input>
                <div className='parity'>{this.state.parity}</div>
            </div>
        );
    }
}

export default EvenOrOdd;