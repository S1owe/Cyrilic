import React, { Component } from 'react';
import {render} from 'react-dom'
import './body.css';



class Head extends Component {
	
	render() {
		return(
<header>
	<div class="input">
					<a href="signup.html" class="registration" target="_self">Регистрация</a>
					<a href="input.html" class="button" target="_self">Войти</a>
				</div>
				<nav>
					<div class="topnav" id="Topnav">
						<a href="#about" class="menu" target="_self">О театре</a>
						<a href="#" class="menu" target="_self">Новости</a>
						<a href="#" class="menu" target="_self">Афиша</a>
						<a href="index.html" class="logo" target="_self"><img class="graficlogo" src="img/logo2.jpg" alt="Logo"/></a>
						<a href="#" class="menu" target="_self">Люди театра</a>
						<a href="#" class="menu" target="_self">Контакты</a>
						<a href="#" class="menu" target="_self">Фотогалерея</a>
					</div>
	</nav>
</header>
		)
	}
}
// render(
    // <Head />,
    // document.getElementById('head')
// );
export default Head;