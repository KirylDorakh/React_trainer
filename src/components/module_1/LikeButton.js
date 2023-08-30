import React, {useState} from "react";
import PropTypes from "prop-types";

function LikeButton(props){
    const [initialLikeNumber, moreLikes] = useState(props.initialLikeNumber)

    return (
        <button onClick={ ()=> {
            moreLikes(initialLikeNumber + 1)
        } }>
            ❤️ {initialLikeNumber}
        </button>
    )
}


LikeButton.propTypes = {
    initialLikeNumber: PropTypes.number
}

export default LikeButton;