import React from "react";

import "../../styles/module_1/Message.css"

function Message({name}){
    return (
        <h1>
            <p>Hi! My name is <span>{name}!</span></p>
        </h1>
    )
}

export default Message