import React, {useState} from "react";

import "../styles/App.css"

import Message from "./Message";
import List from "./List"
import LikeButton from "./LikeButton";
import UserCard from "./UserCard";
import Email from "./Email";

import StaredRating from "./StaredRating";

import MouseDetector from "./MouseDetector";

function App(){
    let name = "Kiryl"
    let orderList = [{id: 1, title: "title 1", urgent: true, done: false},
                                              {id: 2, title: "title 2", urgent: false, done: true}]

    return(
        <>
            <Message name={ name }/>
            <List orderList={ orderList }/>
            <LikeButton initialLikeNumber={7}/>
            <UserCard    name='Василий Пупкин'
                         avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                         email='vasiliy.pupkin@yandex.ru'/>
            <Email />
            <div className="rating">
                <h3 className="title">Зеленая миля</h3>
                <StaredRating key={1} rate={4}/>
                <h3 className="title">Стражи Галактики</h3>
                <StaredRating key={2} rate={3}/>
            </div>

            <MouseDetector />
        </>
        )
}

export default App