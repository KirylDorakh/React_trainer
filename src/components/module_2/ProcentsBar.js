import React, {Component} from 'react';
import PropTypes from "prop-types";

import "../../styles/module_2/ProcentsBar.css"

class ProcentsBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="app">
                <h4 className="progressBarTitle">{this.props.title}</h4>
                <div className="progressBar">
                    <div className="progressBarDone" style={{width: `${this.props.amount}%`}}>
                        {`${this.props.amount}%`}
                    </div>
                </div>
            </div>
        );
    }
}

ProcentsBar.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

export default ProcentsBar;


// ============== var 2 =========
class Progress extends React.Component {
    render() {
        const {title, amount} = this.props
        return <React.Fragment>
            <h3 className="progressBarTitle">{title}</h3>
            <div className="progressBar">
                <div className="progressBarDone" style={{width: `${amount}%`}}>
                    {amount}%
                </div>
            </div>
        </React.Fragment>
    }
}