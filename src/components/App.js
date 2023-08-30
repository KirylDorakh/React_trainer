import React, {useState} from "react";

import "../styles/App.css"

import Message from "./module_1/Message";
import List from "./module_1/List"
import LikeButton from "./module_1/LikeButton";
import UserCard from "./module_1/UserCard";
import Email from "./module_1/Email";

import StaredRating from "./module_1/StaredRating";

import MouseDetector from "./module_1/MouseDetector";
import Notification from "./module_2/Notification";
import FilteredList from "./module_2/FilteredList";
import Auth from "./module_2/Auth";
import ProcentsBar from "./module_2/ProcentsBar";
import EvenOrOdd from "./module_2/EvenOrOdd";

const items = ['apple', 'pineapple', 'orange', 'apricot', 'lime', 'lemon', 'plum']

function App(){
    let name = "Kiryl"
    let orderList = [  {
        id: 1,
        title: 'картошка',
        urgent: true,
        done: false
    },
        {
            id: 2,
            title: 'молоко',
            urgent: true,
            done: true
        },
        {
            id: 3,
            title: 'орехи',
            urgent: false,
            done: false
        },
        {
            id: 4,
            title: 'батон',
            urgent: false,
            done: false
        },]

    return(
        <>
        {/*  Module 1  */}
            {/*<Message name={ name }/>*/}
            {/*<List orderList={ orderList }/>*/}
            {/*<LikeButton initialLikeNumber={7}/>*/}
            {/*<UserCard    name='Василий Пупкин'*/}
            {/*             avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'*/}
            {/*             email='vasiliy.pupkin@yandex.ru'/>*/}
            {/*<Email />*/}
            {/*<div className="rating">*/}
            {/*    <h3 className="title">Зеленая миля</h3>*/}
            {/*    <StaredRating key={1} rate={4}/>*/}
            {/*    <h3 className="title">Стражи Галактики</h3>*/}
            {/*    <StaredRating key={2} rate={3}/>*/}
            {/*</div>*/}
            {/*<MouseDetector />*/}

        {/*  Module 2  */}
        {/*    <div className="task1">*/}
        {/*        <Notification type='info' message='Status updated' />*/}
        {/*        <Notification type='warning' message='Be sure to precompile your scripts' />*/}
        {/*        <Notification type='error' message='Something went wrong' />*/}
        {/*        <Notification type='' message='New feature were added' />*/}
        {/*    </div>*/}
        {/*    <div className="task2">*/}
        {/*        <FilteredList items={items}/>*/}
        {/*    </div>*/}
        {/*    <div className="task3">*/}
        {/*        <Auth />*/}
        {/*    </div>*/}
        {/*    <div className="task4">*/}
        {/*        <h2 className="title">My Skills</h2>*/}
        {/*        <ProcentsBar title="JavaScript" amount={75}/>*/}
        {/*        <ProcentsBar title="Django" amount={25}/>*/}
        {/*        <ProcentsBar title="Python" amount={55}/>*/}
        {/*    </div>*/}
            <div className="task5">
                <EvenOrOdd />
            </div>
        </>
        )
}

export default App