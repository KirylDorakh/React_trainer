import React from "react";

import "../styles/Email.css"

function Email(){

    let  myRef = React.createRef();

    return (
        <React.Fragment>
            <label htmlFor='email'>Введите email:</label>
            <input type='email' id='email' ref={myRef}></input>
            <button onClick={() => {
                alert(`Письмо отправлено на адрес: ${ myRef.current.value }`)
                }
            }>Отправить</button>
        </React.Fragment>
    )
}

export default Email;