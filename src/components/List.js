import React from "react";
import PropTypes from "prop-types";

function List(props){

    return(
        <div>
            <h2>Список покупок:</h2>
            <ul>
                { props.orderList.map((item) => (
                    item.done ?
                        <li key={item.id} style={{background: item.urgent && "red"}}><del>{ item.title }</del></li> :
                        <li key={item.id} style={{background: item.urgent && "red"}}>{ item.title }</li>
                ))
                }
            </ul>
        </div>
    )
}

List.propTypes = {
    orderList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            urgent: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        })
    )
}

export default List