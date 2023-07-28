import React from "react";
import PropTypes from "prop-types";

function LikeButton(props){
    return (
        <button>
            ❤️ 0
        </button>
    )
}


LikeButton.propTypes = {
    initialLikeNumber: PropTypes.number
}

export default LikeButton;