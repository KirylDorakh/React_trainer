import React from "react";

import "../styles/Email.css"

function Email(){

    let myRef = React.createRef();

    const handleClick = () => {
        alert(`Письмо отправлено на адрес: ${ myRef.current.value }`)
    };

    return (
        <React.Fragment>
            <label htmlFor='email'>Введите email:</label>
            <input type='email' id='email' ref={myRef}></input>
            <button onClick={ handleClick }>Отправить</button>
        </React.Fragment>
    )
}

export default Email;