import React, {Component} from 'react';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        }
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(e){
        this.setState({
            auth: e.target.checked
        })
    }

    render() {
        return (
            <div className="auth">
                <div>
                    <h2>Пожалуйста, заполните анкетные данные для авторизации</h2>
                    <div className="sign-up-block">
                        <input type="checkbox"
                               id="isSignedUp"
                               className="sign-up-block__checkbox"
                               onChange={this.handleCheck}
                        ></input>
                        <label htmlFor="isSignedUp" className="sign-up-block__label">
                            Уже зарегистрирован
                        </label>
                    </div>
                    <label htmlFor="login" className="form-label">Login</label>
                    <input id="login" className="form-input"></input>
                    { !this.state.auth ? <>
                            <label htmlFor="phone" className="form-label">Телефон</label>
                            <input id="phone" className="form-input"></input>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" className="form-input"></input>
                        </> : ' '

                    }

                </div>
            </div>

        );
    }
}

export default Auth;