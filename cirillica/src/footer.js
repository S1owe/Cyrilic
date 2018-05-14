import React, { Component } from 'react';
import {render} from 'react-dom'
import './body.css';



class Footer extends Component {
	
	render() {
		return(
		<footer>
            <p class="heading">Контакты</p>
            <div class="footer_container">
                <div class="section bottomnav">
                    <a href="#" class="mini-menu" target="_self">Навигация</a>
                    <a href="#" class="mini-menu" target="_self">Расписание</a>
                    <a href="#" class="mini-menu" target="_self">О театре</a>
                    <a href="#" class="mini-menu" target="_self">Люди театра</a>
                    <a href="#" class="mini-menu" target="_self">Фотогалерея</a>
                </div>
                <div class="section contacts">
					<span> 
                        <p>Телефон: <strong>+7(953)020-20-17</strong></p> 
                        <p>Оффициальная группа: <strong>VK.com</strong></p> 
                        <p> Почта:  <strong>Teatrkirillica@gmail.com</strong></p> 
                    </span> 
                </div> 
                <div class="section respond"> 

                    <form id="commentform" method="post" name="commentform"> 
   
                        <span> 
                           <label for="email"><small>E-mail</small></label><br/> 
                           <input type="text" name="email" id="email" value="" size="25" tabindex="2" aria-required="true"/> 
                       </span> 
                        <span> 
                            <label for="comment"><small>Вопросы и пожелания</small></label><br/> 
                            <textarea name="comment" id="comment" rows="4" tabindex="7"></textarea> 
                        </span> 
                        <span> 
                            <input name="submit" type="submit" id="submit" tabindex="5" value="Отправить"/> 

                            <input type="hidden" name="comment_parent" id="comment_parent" value="0"/> 
                        </span> 
                    </form> 

                </div> 
            </div>
            <p class="copyright">Центр проектого творчества - 2018. Все права защищены. | Правило преобретения билетов </p>
        </footer>

		)
	}
}
// render(
    // <Head />,
    // document.getElementById('head')
// );
export default Footer;