import React from 'react';

import "../../styles/module_2/Notification.css"

const icons = [
    {type: "info", icon: '✔️'},
    {type: "warning", icon: '⚠️️'},
    {type: "error", icon: '⛔️'}
]


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: ''
        }
    }

    render() {
        const { type, message } = this.props
        return (
            <div className={`notification ${type}`} >
                <span className="icon">{ icons.map(icon =>
                    icon.type === type ? icon.icon : this.state.icon)}</span>
                <h2 className="title">{type}</h2>
                <p className="message">{message}</p>
            </div>
        )
    }
}

export default Notification;