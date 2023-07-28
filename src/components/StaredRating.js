import React, {useState} from "react";
import PropTypes from "prop-types";

import "../styles/StaredRating.css"

function StaredRating(props){
    let count = props.rate
    const maxSize = 5;

    const raiting = Array.from({ length: maxSize }, (_, index) => {
        const classStar = index + 1 <= count ? 'star checked' : 'star'
        return <span key={index} className={ classStar }></span>
    })

    return(
        <div>{ raiting }</div>

    )
}

StaredRating.propTypes = {
    rate: PropTypes.number
}

export default StaredRating;