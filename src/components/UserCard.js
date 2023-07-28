import React from "react";
import PropTypes from "prop-types";

import "../styles/UserCard.css"

function UserCard ({name, email, avatar="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}) {
    return(
        <div className='card'>
            <img src={avatar} width="30px" height="30px"/>
            <div className='card-data'>
                <div className='name'>{ name }</div>
                <div className='email'>{ email }</div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,

}

export default UserCard