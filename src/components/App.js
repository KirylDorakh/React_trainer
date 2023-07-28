import React from "react";

import "../styles/App.css"

import Message from "./Message";
import List from "./List"
import LikeButton from "./LikeButton";

function App(){
    let name = "Kiryl"
    let orderList = [{id: 1, title: "title 1", urgent: true, done: false},
                                              {id: 2, title: "title 2", urgent: false, done: true}]
    return(
        <>
            <Message name={ name }/>
            <List orderList={ orderList }/>
            <LikeButton />
        </>
        )
}

export default App