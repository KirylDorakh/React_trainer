import React from 'react';
import "../../styles/module_2/FilteredList.css"

import PropTypes from "prop-types";



class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
        const items = this.props.items.map(item => {
            if (item.includes(e.target.value)){
                return item
            }
        }).filter(item => item !== undefined)
        this.setState({items: items})
    }

    render() {
        return (
            <div className='list'>
                <div className="filtered-list">
                    <input className="filtered-list__input" onChange={this.handleInput}></input>
                    <ul className="filtered-list__list">
                        {this.state.items.map( (item, ind) => (
                            <li key={ind} className="filtered-list__item">{item}</li>))}
                    </ul>
                </div>
            </div>

        );
    }
}

FilteredList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}

export default FilteredList;