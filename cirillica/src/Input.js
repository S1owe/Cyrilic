import React, {Component} from 'react';
import './body.css';
import './style_input.css';
import './booking.css';
//import './fonts.css';




class Input extends Component {
    constructor(props) {
        super(props);
        this.state={
            Password:"",
            Email:"",
        }
    };

    Auth = () => {

        fetch(`http://k.creativityprojectcenter.ru/api.php?mode=auth&email=${this.state.Email}&password=${this.state.Password}`)
            .catch((err) => {alert("Ошибка")})

    };

    authEmail =(e) => {
        this.setState({Email:e.target.value});
    };

    authPassword =(e) => {
        this.setState({Password:e.target.value});
    };


    render() {
        return (
            <div className="container">
                <div className="title_text">
                    <p>Для оформления заказа Вам нужно войти.</p>
                    <p>Если у Вас нет аккаунта,
                        <a href="signup.html"> зарегистрируйтесь.</a>
                    </p>
                </div>
                <div id="input">
                    <form id="modal_form" method="post" name="modal_form">
                        <div className="title_text">
                            <p className="heading">Вход</p>
                            <p className="heading_3">в личный кабинет</p>
                        </div>
                        <div className="modal_form_group">
                            <label htmlFor="login-email" >Почта</label><br/>
                            <input type="email" name="login-email" id="login-email" onInput={this.authEmail}/>
                        </div>
                        <div className="modal_form_group">
                            <label htmlFor="login-password">Пароль</label><br/>
                            <input type="password" name="login-password" id="login-password" onInput={this.authPassword}/>
                        </div>
                        <div className="modal_form_group">
                            <p className="modal_forgot-password">
                                <a href="#">Забыли пароль?</a>
                            </p>
                        </div>

                    </form>
                    <button className="Auth_Reg" onClick={this.Auth}>Войти</button>
                </div>
            </div>
        );
    }
};



export default Input;




