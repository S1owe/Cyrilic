import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {render} from 'react-dom';
import { Route, NavLink, Switch, BrowserRouter } from 'react-router-dom'
import './index.css';
import { Link, animateScroll as scroll } from 'react-scroll'

let screen_height = window.screen.height;
console.log(screen_height);

class Nav_menu extends React.Component {
   render(){
       return <nav>
           <div id="left_menu_content">

               <NavLink exact to="/" activeClassName="active">
                   <div className="left_menu_content 1">
                       <i>Главная страница</i>
                   </div>
               </NavLink>

               <NavLink to="/reservation" activeClassName="active">
                   <div className="left_menu_content 2">
                       <i>Бронирование и оплата</i>
                   </div>
               </NavLink>

               <NavLink to="/about_performance" activeClassName="active">
                   <div className="left_menu_content 3">
                       <i>О спектакле</i>
                   </div>
               </NavLink>

               <NavLink to="/news" activeClassName="active">
                   <div className="left_menu_content 4">
                       <i>Новость спектакля</i>
                   </div>
               </NavLink>

               <NavLink to="/people_theatre" activeClassName="active">
                   <div className="left_menu_content 5">
                       <i>Люди театра</i>
                   </div>
               </NavLink>
           </div>
       </nav>
   }
}



class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin_name: "Slowe",
            left_menu_close: false,
        }
    }

    Close_left_menu = () => {
       this.setState({
           left_menu_close: false
       })
    };

    Open_left_menu = () => {
        this.setState({
            left_menu_close: true
        })
    };

    render() {
        const { left_menu_close } = this.state;

        return (
            <div id="all_container">
                <div id="header">
                    <div id="header_admin_a"><a>Панель администратора</a></div>
                    <div id="header_right">
                        <div id="admin_name">
                            <a>{this.state.admin_name}</a>
                        </div>
                        <a href="#">
                            <div id="button_src_on_major_page">
                                <i>Главная страница</i>
                            </div>
                        </a>
                        <a href="#">
                            <div id="button_exit">
                                <i>Выйти</i>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="container">
                    <BrowserRouter>
                        <div>

                    {   left_menu_close &&
                        <div id="left_menu">
                            <div id="close_left_menu" onClick={this.Close_left_menu}>
                                <img src="./close.png"/>
                            </div>
                            <Nav_menu />
                            
                        </div>
                    }
                    {   !left_menu_close &&
                    <div id="left_menu_icon" onClick={this.Open_left_menu}>
                        <img src="./menu.png"/>
                    </div>
                    }
                            <Switch>
                                <Route exact path="/" component={Major_page_content_and_menu} />
                                <Route path="/reservation" component={Reservation} />
                                <Route path="/about_performance" component={About_performance} />
                                <Route path="/news" component={News_performance} />
                                <Route path="/people_theatre" component={People_theater} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

class News_performance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [
                {
                    option: 'Выбрать',
                    func: 'disabled'
                },
                {
                    option: 'Все'
                },
                {
                    option: 'Руководители'
                },
                {
                    option: 'Актеры'
                },
                {
                    option: 'Солисты'
                },
            ],

            add: [
                {
                    title: 'Поздравляем с премьерой новой редакции спектакля «Люкс № 13»!',
                    img: [
                        {image: 'https://w-dog.ru/wallpapers/12/12/424941701824413.jpg'},
                        {image: 'http://www.dream-wallpaper.com/free-wallpaper/art-wallpaper/color-splash-2-wallpaper/1920x1200/free-wallpaper-11.jpg'},
                        {image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/mgW44id/color-explosion-on-black-spectrum-with-alpha-matte-full-hd_hpdmkbr8__F0001.png'},
                        {image: 'https://st3.depositphotos.com/1025323/12863/i/950/depositphotos_128631806-stock-photo-paint-explosion-background.jpg'},
                        {image: 'http://globalfocusmagazine.com/wp-content/uploads/2017/01/Cover.jpg'},
                        {image: 'https://ak.picdn.net/shutterstock/videos/24419024/thumb/8.jpg'},
                        {image: 'https://cdn.europosters.eu/image/750/wall-murals/colour-explosion-312x219-cm-130g/m2-vlies-non-woven-i35909.jpg'},
                        {image: 'https://wallpapersmug.com/download/2560x1600/70e27e/colorful_powder_explosion.jpg'},
                    ],
                    text: '\n' +
                    '26 апреля на большой сцене с успехом прошел один из самых популярных спектаклей нынешнего репертуара драмтеатра — комедия «Люкс № 13» по пьесе британского драматурга Рэя Куни. Несмотря на то, что этот спектакль играется с июля 2009 года и был показан уже в 90-й раз, для актеров и зрителей он стал, по сути, премьерой — под руководством худрука театра Сергея Казакова была выпущена новая редакция постановки с практически полностью обновленным актерским составом. В этот вечер совершенно невероятную детективно-комедийную историю, случившуюся в номере респектабельной лондонской гостиницы, впервые разыграли актеры Артём Тихомиров (помощник депутата Джордж Пигден), Наталья Прокошкина (секретарша Джейн Уорзингтон), Николай Потапов (Управляющий отелем), Николай Шаповалов (Официант), Яна Дубровина (Горничная), Артём Давыдов (Ронни Уорзингтон, муж Джейн), Елена Павлова (Памела, жена депутата Ричарда Уилли), Елена Ушкина (медсестра Глэдис Фостер). Еще два исполнителя центральных ролей — Сергей Пахомов (депутат Ричард Уилли) и Артём Самохин (детектив Джек Бейкер) сыграли свои роли всего в третий раз. Зрители тепло приняли новую версию спектакля — в зале то и дело звучал хохот, аплодисменты, а в финале актеров долго не отпускали со сцены, хлопали и кричали «браво». Поздравляем с премьерой всех исполнителей, режиссера-постановщика новой редакции заслуженного артиста России Сергея Казакова, художника-постановщика Олега Авдонина, художника по костюмам Марину Смельчакову, художника по свету Дмитрия Чуканова, балетмейстера Наталью Кинге, звукорежиссера Олега Рыскина и ассистента режиссера Ольгу Терехину, которая бессменно провела все 90 спектаклей «Люкса».',
                },

                {
                    title: 'Поздравляем с премьерой новой редакции спектакля «Люкс № 13»!',
                    img: [
                        {image: 'https://w-dog.ru/wallpapers/12/12/424941701824413.jpg'},
                        {image: 'http://www.dream-wallpaper.com/free-wallpaper/art-wallpaper/color-splash-2-wallpaper/1920x1200/free-wallpaper-11.jpg'},
                        {image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/mgW44id/color-explosion-on-black-spectrum-with-alpha-matte-full-hd_hpdmkbr8__F0001.png'},
                        {image: 'https://st3.depositphotos.com/1025323/12863/i/950/depositphotos_128631806-stock-photo-paint-explosion-background.jpg'},
                        {image: 'http://globalfocusmagazine.com/wp-content/uploads/2017/01/Cover.jpg'},
                        {image: 'https://ak.picdn.net/shutterstock/videos/24419024/thumb/8.jpg'},
                        {image: 'https://cdn.europosters.eu/image/750/wall-murals/colour-explosion-312x219-cm-130g/m2-vlies-non-woven-i35909.jpg'},
                        {image: 'https://wallpapersmug.com/download/2560x1600/70e27e/colorful_powder_explosion.jpg'},
                    ],
                    text: '\n' +
                    '26 апреля на большой сцене с успехом прошел один из самых популярных спектаклей нынешнего репертуара драмтеатра — комедия «Люкс № 13» по пьесе британского драматурга Рэя Куни. Несмотря на то, что этот спектакль играется с июля 2009 года и был показан уже в 90-й раз, для актеров и зрителей он стал, по сути, премьерой — под руководством худрука театра Сергея Казакова была выпущена новая редакция постановки с практически полностью обновленным актерским составом. В этот вечер совершенно невероятную детективно-комедийную историю, случившуюся в номере респектабельной лондонской гостиницы, впервые разыграли актеры Артём Тихомиров (помощник депутата Джордж Пигден), Наталья Прокошкина (секретарша Джейн Уорзингтон), Николай Потапов (Управляющий отелем), Николай Шаповалов (Официант), Яна Дубровина (Горничная), Артём Давыдов (Ронни Уорзингтон, муж Джейн), Елена Павлова (Памела, жена депутата Ричарда Уилли), Елена Ушкина (медсестра Глэдис Фостер). Еще два исполнителя центральных ролей — Сергей Пахомов (депутат Ричард Уилли) и Артём Самохин (детектив Джек Бейкер) сыграли свои роли всего в третий раз. Зрители тепло приняли новую версию спектакля — в зале то и дело звучал хохот, аплодисменты, а в финале актеров долго не отпускали со сцены, хлопали и кричали «браво». Поздравляем с премьерой всех исполнителей, режиссера-постановщика новой редакции заслуженного артиста России Сергея Казакова, художника-постановщика Олега Авдонина, художника по костюмам Марину Смельчакову, художника по свету Дмитрия Чуканова, балетмейстера Наталью Кинге, звукорежиссера Олега Рыскина и ассистента режиссера Ольгу Терехину, которая бессменно провела все 90 спектаклей «Люкса».',
                },

                {
                    title: 'Поздравляем с премьерой новой редакции спектакля «Люкс № 13»!',
                    img: [
                        {image: 'https://w-dog.ru/wallpapers/12/12/424941701824413.jpg'},
                        {image: 'http://www.dream-wallpaper.com/free-wallpaper/art-wallpaper/color-splash-2-wallpaper/1920x1200/free-wallpaper-11.jpg'},
                        {image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/mgW44id/color-explosion-on-black-spectrum-with-alpha-matte-full-hd_hpdmkbr8__F0001.png'},
                        {image: 'https://st3.depositphotos.com/1025323/12863/i/950/depositphotos_128631806-stock-photo-paint-explosion-background.jpg'},
                        {image: 'http://globalfocusmagazine.com/wp-content/uploads/2017/01/Cover.jpg'},
                        {image: 'https://ak.picdn.net/shutterstock/videos/24419024/thumb/8.jpg'},
                        {image: 'https://cdn.europosters.eu/image/750/wall-murals/colour-explosion-312x219-cm-130g/m2-vlies-non-woven-i35909.jpg'},
                        {image: 'https://wallpapersmug.com/download/2560x1600/70e27e/colorful_powder_explosion.jpg'},
                    ],
                    text: '\n' +
                    '26 апреля на большой сцене с успехом прошел один из самых популярных спектаклей нынешнего репертуара драмтеатра — комедия «Люкс № 13» по пьесе британского драматурга Рэя Куни. Несмотря на то, что этот спектакль играется с июля 2009 года и был показан уже в 90-й раз, для актеров и зрителей он стал, по сути, премьерой — под руководством худрука театра Сергея Казакова была выпущена новая редакция постановки с практически полностью обновленным актерским составом. В этот вечер совершенно невероятную детективно-комедийную историю, случившуюся в номере респектабельной лондонской гостиницы, впервые разыграли актеры Артём Тихомиров (помощник депутата Джордж Пигден), Наталья Прокошкина (секретарша Джейн Уорзингтон), Николай Потапов (Управляющий отелем), Николай Шаповалов (Официант), Яна Дубровина (Горничная), Артём Давыдов (Ронни Уорзингтон, муж Джейн), Елена Павлова (Памела, жена депутата Ричарда Уилли), Елена Ушкина (медсестра Глэдис Фостер). Еще два исполнителя центральных ролей — Сергей Пахомов (депутат Ричард Уилли) и Артём Самохин (детектив Джек Бейкер) сыграли свои роли всего в третий раз. Зрители тепло приняли новую версию спектакля — в зале то и дело звучал хохот, аплодисменты, а в финале актеров долго не отпускали со сцены, хлопали и кричали «браво». Поздравляем с премьерой всех исполнителей, режиссера-постановщика новой редакции заслуженного артиста России Сергея Казакова, художника-постановщика Олега Авдонина, художника по костюмам Марину Смельчакову, художника по свету Дмитрия Чуканова, балетмейстера Наталью Кинге, звукорежиссера Олега Рыскина и ассистента режиссера Ольгу Терехину, которая бессменно провела все 90 спектаклей «Люкса».',
                },
            ]
        };
    }

    Delete = (i) => {
        let arr = this.state.add;
        arr.splice (i, 1);
        this.setState ({add: arr});
    };


        render(){
            return (
                <div id="news_performance">
                    <h1>Новость спектакля</h1>
                    <div id="news_performance_cont">
                        <div id="news_performance_select">
                            <a>Выбрать спектакль</a>
                            <select>
                                {this.state.selected.map((item, i) =>{
                                    return(
                                        <option key={i} defaultValue={item.func}>{item.option}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div id="news_performance_img">
                            <a>Выбрать изображения</a>
                            <label>
                                <input type="file" name="photo" multiple accept="image/*" />
                                <span>Выбрать файл</span>
                            </label>
                        </div>
                        <div id="news_performance_text">
                            <h5>Текст новости</h5>
                            <div id="news_performance_text_textarea">
                                <textarea type="text" />
                            </div>
                        </div>
                        <div id="news_performance_button">
                           <input type="submit" value='Добавить'/>
                        </div>
                    </div>

                    <h2>Добавленные новости спектакля</h2>
                    <div id="news_performance_add">
                        {this.state.add.map((item, i) => {
                            return(
                                <div className="news_performance_add_cont" key={i}>
                                    <div className="news_performance_add_close_all" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                <h3>{item.title}</h3>
                                    <div className="news_performance_add_img_cont">
                                    {this.state.add[i].img.map((img, i) => {
                                        return(
                                        <div key={i} className="news_performance_add_img">
                                            <div className="news_performance_add_background-img" style={{backgroundImage: "url(" + img.image + ")"}}/>
                                        </div>
                                        )
                                    })}
                                    </div>
                                    <div className="news_performance_add_text">
                                        <a>{item.text}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
}

class People_theater extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [
                {
                    option: 'Выбрать',
                    func: 'disabled'
                },
                {
                    option: 'Все'
                },
                {
                    option: 'Руководители'
                },
                {
                    option: 'Актеры'
                },
                {
                    option: 'Солисты'
                },
            ],

            items: [
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },{
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                }
            ],
            
            but_state1: true,
            but_state2: false,
            but_state3: false,
            but_state4: false
        };

        this.button_all = this.button_all.bind(this);
        this.button_leadership = this.button_leadership.bind(this);
        this.button_actor = this.button_actor.bind(this);
        this.button_soloist = this.button_soloist.bind(this);
    }

    button_all() {
        // check if box is currently opened
        this.setState({
            but_state1: true,
            but_state2: false,
            but_state3: false,
            but_state4: false
        });
    }

    button_leadership() {
        // check if box is currently opened
        this.setState({
            but_state1: false,
            but_state2: true,
            but_state3: false,
            but_state4: false
        });
    }

    button_actor() {
        // check if box is currently opened
        this.setState({
            but_state1: false,
            but_state2: false,
            but_state3: true,
            but_state4: false
        });
    }

    button_soloist() {
        // check if box is currently opened
        this.setState({
            but_state1: false,
            but_state2: false,
            but_state3: false,
            but_state4: true
        });
    }

    Delete = (i) => {
        let arr = this.state.items;
        arr.splice (i, 1);
        this.setState ({items: arr});
    };

    render(){

        let { but_state1 } = this.state;
        let { but_state2 } = this.state;
        let { but_state3 } = this.state;
        let { but_state4 } = this.state;

        return(
            <div id="People_theater">
                <h1>Люди театра</h1>
                <div id="People_theater_cont">
                    <div id="People_theater_img_con">
                        <a>Загрузить изображение</a>
                        <label>
                            <input type="file" name="photo" multiple accept="image/*" />
                            <span>Выбрать файл</span>
                        </label>
                    </div>
                    <div id="People_theater_name">
                        <a>Имя:</a><input type="text" />
                    </div>
                    <div id="People_theater_secondname">
                        <a>Фамилия:</a><input type="text" />
                    </div>
                    <div id="People_theater_select">
                        <a>Категория:</a>
                        <select>
                                {this.state.selected.map((item, i) =>{
                                    return(
                                        <option key={i} defaultValue={item.func}>{item.option}</option>
                                    )
                                })
                                }
                        </select>
                    </div>
                    <input type="submit" value="Добавить" />
                </div>
                <h1>Добавленные люди театра</h1>

                <div id="People_theater_content-menu">
                        <div className="People_theater_second_menu">
                            <a onClick={this.button_all}>Все</a>
                        </div>

                        <div className="People_theater_second_menu">
                            <a onClick={this.button_leadership}>Руководители</a>
                        </div>

                        <div className="People_theater_second_menu">
                            <a onClick={this.button_actor}>Актеры</a>
                        </div>

                        <div className="People_theater_second_menu">
                            <a onClick={this.button_soloist}>Солисты</a>
                        </div>
                </div>

                { but_state1 && !but_state2 && !but_state3 && !but_state4 &&
                (
                    <div className="People_theater_cont_people">
                        {
                            this.state.items.map((item, i) => {
                                return (
                                    <div key={i} className="people_container">
                                        <div className="People_theater_add_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                        <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                        <div className="people_name">
                                            <a>{item.name}</a>
                                        </div>
                                        <div className="people_secondname">
                                            <a>{item.secondname}</a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                )}

                { !but_state1 && but_state2 && !but_state3 && !but_state4 &&
                (
                    <div className="People_theater_cont_people">
                        {
                            this.state.items.map((item, i) => {
                                if (item.id === '1') {
                                    return (
                                        <div key={i} className="people_container">
                                            <div className="People_theater_add_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                            <div className="people_name">
                                                <a>{item.name}</a>
                                            </div>
                                            <div className="people_secondname">
                                                <a>{item.secondname}</a>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                )}

                { !but_state1 && !but_state2 && but_state3 && !but_state4 &&
                (
                    <div className="People_theater_cont_people">
                        {
                            this.state.items.map((item, i) => {
                                if (item.id === '2') {
                                    return (
                                        <div key={i} className="people_container">
                                            <div className="People_theater_add_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                            <div className="people_name">
                                                <a>{item.name}</a>
                                            </div>
                                            <div className="people_secondname">
                                                <a>{item.secondname}</a>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                )}

                { !but_state1 && !but_state2 && !but_state3 && but_state4 &&
                (
                    <div className="People_theater_cont_people">
                        {
                            this.state.items.map((item, i) => {
                                if (item.id === '3') {
                                    return (
                                        <div key={i} className="people_container">
                                            <div className="People_theater_add_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                            <div className="people_name">
                                                <a>{item.name}</a>
                                            </div>
                                            <div className="people_secondname">
                                                <a>{item.secondname}</a>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                )}

            </div>
        )
    }
}

class About_performance extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [

                {
                    option: 'Выбрать',
                    func: 'disabled'
                },
                {
                    option: 'Понедельник начинается в субботу'
                },
                {
                    option: 'Завтрашний день'
                },
                {
                    option: 'Вечернее утро'
                },
                {
                    option: 'Зимний июнь'
                },
            ],

            add: [
                {
                    name: 'Данил',
                    secondname: 'Данилин',
                    performance: 'Альцина',
                    part: 'Волшебница'
                },
                {
                    name: 'Гоша',
                    secondname: 'Данилин',
                    performance: 'Альцина',
                    part: 'Прислуживающий'
                },
                {
                    name: 'Абрам',
                    secondname: 'Данилин',
                    performance: 'Альцина',
                    part: 'Король'
                },
            ],
            producer_add: [
                {
                  img: 'https://avatars.mds.yandex.net/get-pdb/225396/4b1b4fb0-376e-49f1-a3ae-9c015d0d2f6d/s1200?webp=false',
                  post: 'Дирижер-постановщик',
                  name: 'Дмитрий Данилин'
                },
                {
                    img: 'https://avatars.mds.yandex.net/get-pdb/909209/02a6914b-315d-48e0-bad1-71e0cf53711c/s1200?webp=false',
                    post: 'Дирижер-постановщик',
                    name: 'Дмитрий Данилин'
                },
                {
                    img: 'https://avatars.mds.yandex.net/get-pdb/812271/2198a3c9-9860-4e80-ad31-5947c0c3d11b/s1200?webp=false',
                    post: 'Дирижер-постановщик',
                    name: 'Дмитрий Данилин'
                },
            ]
        }
    }

    Delete = (i) => {
        let arr = this.state.add;
        arr.splice (i, 1);
        this.setState ({add: arr});
    };

    render(){
        return (
            <div id="performance_cont">
                <h1>О спектакле</h1>
                <div id="performance_container">
                    <div id="performance_select">
                        <a>Выбрать спектакль</a>
                        <select>
                            {this.state.selected.map((item, i) =>{
                                return(
                                    <option key={i} defaultValue={item.func}>{item.option}</option>
                                )
                            })
                            }
                        </select>
                    </div>

                    <div id="performance_act_and_age_cont">
                        <div id="performance_act">
                            <a>Количество действий</a>
                            <input type="text" />
                        </div>
                        <div id="performance_age">
                            <a>Возрастное ограничение</a>
                            <input type="text" />
                        </div>
                    </div>
                    <h5>Описание спектакля</h5>
                    <div id="performance_description"><textarea type="text" /></div>
                    <div id="performance_intermission_and_duration_cont">
                        <div id="performance_intermission">
                            <a>Количество антрактов</a>
                            <input type="text" />
                        </div>
                        <div id="performance_duration">
                            <a>Продолжительность</a>
                            <input type="text" />
                        </div>
                    </div>

                    <h3>Действующие лица и исполнители</h3>
                    <div id="performance_people_cont">
                        <div id="performance_people_cont_left">
                            <div id="performance_people_name_con">
                                <a>Имя:</a><input type="text"/>
                            </div>

                            <div id="performance_people_secondname_con">
                                <a>Фамилия:</a><input type="text"/>
                            </div>

                            <div id="performance_people_performance_con">
                                <a>Спектакль:</a><input type="text"/>
                            </div>

                            <div id="performance_people_part_con">
                                <a>Роль:</a><input type="text"/>
                            </div>

                            <div id="performance_people_button"><input type="submit" value="Добавить" /></div>
                        </div>
                        <div id="performance_people_cont_right">
                            <h5>Добавленные</h5>
                            <div id="performance_people_add">
                                {this.state.add.map((item, i) =>{
                                    return(
                                       <div className="performance_people_add_con" key={i}>
                                           <div className="performance_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                           <div className="performance_people_add_circle">
                                               <a>{item.name}</a>
                                               <a>{item.secondname}</a>
                                           </div>
                                           <a>{item.performance}</a>
                                           <a>{item.part}</a>
                                       </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>

                    <h3>Постановщики</h3>
                    <div id="performance_producer_con">
                        <div id="performance_producer_img">
                            <a>Загрузить изображение</a>
                            <label>
                                <input type="file" name="photo" multiple accept="image/*" />
                                <span>Выбрать файл</span>
                            </label>
                        </div>
                        <div id="performance_producer_path">
                            <a>Должность</a><input type="text" />
                        </div>
                        <div id="performance_producer_name">
                            <a>Имя и фамилия</a><input type="text" />
                        </div>
                    </div>
                    <input type="submit" value="Добавить" />

                    <h3>Добавленные постановщики</h3>
                    <div id="performance_producer_add_cont">
                        {this.state.producer_add.map((item, i) =>{
                            return(
                                <div className="performance_producer_add" key={i}>
                                    <div className="performance_producer_add_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                    <div className="performance_producer_add_img" style={{backgroundImage: "url(" + item.img + ")"}} />
                                    <div className="performance_producer_add_post">
                                        <a>{item.post}</a>
                                    </div>
                                    <div className="performance_producer_add_name">
                                        <a>{item.name}</a>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div id="performance_producer_add_all"><input type="submit" value="Загрузить на сайт" /></div>
                </div>
            </div>
        )
    }

}

class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: [

                {
                    option: 'Выбрать',
                    func: 'disabled'
                },
                {
                    option: 'Понедельник начинается в субботу'
                },
                {
                    option: 'Завтрашний день'
                },
                {
                    option: 'Вечернее утро'
                },
                {
                    option: 'Зимний июнь'
                },
            ],

            price: [
                {
                    color: '#32CD32',
                    name: 'color_1'
                },
                {
                    color: '#D2691E',
                    name: 'color_2'
                },
                {
                    color: '#1968eb',
                    name: 'color_3'
                },
                {
                    color: '#b8d761',
                    name: 'color_4'
                },
                {
                    color: '#9400D3',
                    name: 'color_5'
                },
            ],


            td0: [
                {text: ''},
                {text: '1'},
                {text: '2'},
                {text: '3'},
                {text: '4'},
                {text: '5'},
                {text: '6'},
                {text: '7'},
                {text: '8'},
                {text: '9'},
                {text: '10'},
                {text: '11'},
                {text: '12'},
                {text: '13'},
                {text: '14'},
                {text: '15'},
            ],
            td1: [
                {text: '1', color: 'rgba(205, 205, 205, 0)'},
                {color: 'rgba(205, 205, 205, 0)'},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: 'true'},
                {color: '#32CD32', reserved: '', buy: 'true'},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: 'true', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: 'true', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: 'rgba(205, 205, 205, 0)'},
            ],
            td2: [
                {text: '2', color: 'rgba(205, 205, 205, 0)'},
                {color: '#32CD32', reserved: '', buy: 'true'},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: 'true', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
                {color: '#32CD32', reserved: 'true', buy: ''},
                {color: '#32CD32', reserved: '', buy: ''},
            ],
            td3: [
                {text: '3', color: 'rgba(205, 205, 205, 0)'},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: 'true', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: 'true'},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
            ],
            td4: [
                {text: '4', color: 'rgba(205, 205, 205, 0)'},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: 'true'},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: 'true', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
                {color: '#D2691E', reserved: '', buy: ''},
            ],
            td5: [
                {text: '5', color: 'rgba(205, 205, 205, 0)'},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: 'true', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: '#1968eb', reserved: '', buy: 'true'},
                {color: '#1968eb', reserved: '', buy: ''},
                {color: 'rgba(205, 205, 205, 0)'},
            ],
            td6: [
                {text: '6', color: 'rgba(205, 205, 205, 0)'},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: 'true'},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: 'true', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: '#b8d761', reserved: '', buy: ''},
                {color: 'rgba(205, 205, 205, 0)'},
                {color: 'rgba(205, 205, 205, 0)'},
            ],
            td7: [
                {text: '7', color: 'rgba(205, 205, 205, 0)'},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: 'true', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: 'true'},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
                {color: '#9400D3', reserved: '', buy: ''},
            ],
        }
    }

    table_style = (z) => {
      if (z.buy === 'true') {
          return(
              {backgroundColor: '#373737'}
          )
      } else {
          if (z.reserved === 'true') {
              return (
                  {backgroundColor: '#e1e1e1'}
              )
          } else {
              return (
                  {backgroundColor: z.color}
              )
          }
      }

    };


    render(){
        return (
          <div id="reservation" >
             <h1>Бронирование и оплата</h1>
              <div id="reservation_container">
                 <div id="reservation_select">
                    <a>Выбрать спектакль</a>
                    <select>
                        {this.state.selected.map((item, i) =>{
                            return(
                               <option key={i} defaultValue={item.func}>{item.option}</option>
                            )
                        })
                        }
                    </select>
                 </div>
                  <div id="reservation_cont1">
                      <div id="reservation_cont1_date">
                          <a>Дата:</a>
                          <input type="date"/>
                      </div>
                      <div id="reservation_cont1_time">
                          <a>Время:</a>
                          <input type="time"/>
                      </div>
                  </div>
                  <div id="reservation_cont2">
                      <div id="reservation_cont2_age">
                          <a>Возраст:</a>
                          <input type="text"/>
                      </div>
                      <div id="reservation_cont2_room">
                          <a>Зал:</a>
                          <input type="text"/>
                      </div>
                  </div>
                  <div id="reservation_cont3">
                      <div id="reservation_cont3_left">
                          <a>Сцена</a>
                          <table>
                          <tbody>
                            <tr>{this.state.td1.map((item, i) =>{
                                return(
                                   <td style={{backgroundColor: item.color}} key={i}>
                                       <text>{item.text}</text>
                                   </td>
                                )})}</tr>

                            <tr>{this.state.td2.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: item.color}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>

                            <tr>{this.state.td3.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: item.color}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>

                            <tr>{this.state.td4.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: item.color}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>

                            <tr>{this.state.td5.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: item.color}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>

                            <tr>{this.state.td6.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: item.color}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>

                            <tr>{this.state.td7.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: item.color}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>
                            <tr>{this.state.td0.map((item, i) =>{
                                return(
                                    <td style={{backgroundColor: 'rgba(205, 205, 205, 0)'}} key={i}>
                                        <text>{item.text}</text>
                                    </td>
                                )})}</tr>
                        </tbody>
                          </table>
                      </div>

                      <div id="reservation_cont3_right">
                          <h3>Цена</h3>
                          <div id="reservation_price">
                              {this.state.price.map((item, i) =>{
                                  return(
                                      <div className="reservation_price_cont" key={i}>
                                          <div className="reservation_price_color" style={{backgroundColor: item.color}}/>
                                          <input name={item.name} type="text" />
                                      </div>
                                  )
                              })

                           }
                          </div>
                      </div>
                  </div>

                  <div id="reservation_button_add">
                      <input type="submit" value="Добавить" />
                  </div>
              </div>

              <h2>Забронированные и купленные места</h2>
              <div id="reservation_reserve">
                  <div id="reservation_reserve_select">
                      <a>Выбрать спектакль</a>
                      <select>
                          {this.state.selected.map((item, i) =>{
                              return(
                                  <option key={i} defaultValue={item.func}>{item.option}</option>
                              )
                          })
                          }
                      </select>
                  </div>

                  <div id="reservation_reserve_table">
                        <a>Сцена</a>
                      <table>
                          <tbody>
                          <tr>{this.state.td1.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>

                          <tr>{this.state.td2.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>

                          <tr>{this.state.td3.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>

                          <tr>{this.state.td4.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>

                          <tr>{this.state.td5.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>

                          <tr>{this.state.td6.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>

                          <tr>{this.state.td7.map((item, i) =>{
                              return(
                                  <td style={this.table_style(item)} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>
                          <tr>{this.state.td0.map((item, i) =>{
                              return(
                                  <td style={{backgroundColor: 'rgba(205, 205, 205, 0)'}} key={i}>
                                      <text>{item.text}</text>
                                  </td>
                              )})}</tr>
                          </tbody>
                      </table>
                  </div>

                  <div id="reservation_reserve_cont">
                      <div id="reservation_reserve_buy">
                          <div id="reservation_buy"/><a> - Купленные места</a>
                      </div>
                      <div id="reservation_reserve_reserved">
                          <div id="reservation_reserved"/><a> - Забронированные места</a>
                      </div>
                  </div>
              </div>
          </div>
        )
    }

}


class Major_page_content_and_menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main_page: [

                {
                    content: 'Слайдер мероприятия',
                    link: 'slider1'
                },
                {
                    content: 'Слайдер новости',
                    link: 'slider2'
                },
                {
                    content: 'Репертуар',
                    link: 'repertory'
                },
                {
                    content: 'Расписание',
                    link: 'timetable'
                },
                {
                    content: 'Люди театра',
                    link: 'main_page_people_of_theater'
                },
            ],
            right_menu_close: false,
        }
    }

    Close_right_menu = () => {
        this.setState({
            right_menu_close: false
        })
    };

    Open_right_menu = () => {
        this.setState({
            right_menu_close: true
        })
    };

    render(){
        const { right_menu_close } = this.state;
        return (
            <div id="content_and_menu">
                <Major_page />
                {   right_menu_close &&
                <div id="right_menu">
                    <div id="close_right_menu" onClick={this.Close_right_menu}>
                        <img src="./close.png"/>
                    </div>
                    <div id="right_menu_content">
                        <Link className="right_menu_title" onClick={() => scroll.scrollTo(0)}>
                            <text>Главная</text>
                        </Link>
                        {this.state.main_page.map((item, i) => {
                            return (
                                <Link key={i} className="right_menu_title" to={item.link}  spy={true} smooth={true} duration={1000}>
                                    <text>{item.content}</text>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                }
                {   !right_menu_close &&
                <div id="right_menu_icon" onClick={this.Open_right_menu}>
                    <img src="./menu.png"/>
                </div>
                }
            </div>
        )
    }
}

class Major_page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add_slides1: [
                {
                    img: 'https://im0-tub-ru.yandex.net/i?id=65a2a3bb28542e8ffc4513638595abc1&n=13',
                    date: '12.02.2018',
                    title: 'У моря'
                },
                {
                    img: 'https://vizco.club/wp-content/uploads/2016/09/spa-slide-img-1-1024x409.jpg',
                    date: '22.04.2018',
                    title: 'Под дождем'
                },
                {
                    img: 'https://goodnet.ua/images/slideshow/slide11.png',
                    date: '16.03.2018',
                    title: 'За горизонтом'
                },
            ],
            add_slides2: [
                {
                    img: 'https://im0-tub-ru.yandex.net/i?id=65a2a3bb28542e8ffc4513638595abc1&n=13',
                    text: 'С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.\n' +
                    'С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.',
                    title: 'Альцына'
                },
                {
                    img: 'https://vizco.club/wp-content/uploads/2016/09/spa-slide-img-1-1024x409.jpg',
                    text: 'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.\n' +
                    'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
                    title: 'Под ногами'
                },
                {
                    img: 'https://goodnet.ua/images/slideshow/slide11.png',
                    text: 'Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.\n' +
                    'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.',
                    title: 'Молодость у старика'
                },

            ],
            timetable: [
                {
                    title: 'Приключения Бонифация',
                    img: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Colorful-Abstract-Backgrounds.jpg',
                    duration: '1ч 55 мин',
                    price: '250руб.',
                    time: '12:00',
                    date: '10 февраля'
                },
                {
                    title: 'Мужчина к празднику',
                    img: 'https://newevolutiondesigns.com/images/freebies/rainbow-wallpaper-11.jpg',
                    duration: '1ч 20мин',
                    price: '350руб.',
                    time: '13:00',
                    date: '11 марта'
                },
                {
                    title: 'Любовь до потери памяти',
                    img: 'https://cdn.wallaps.com/wallpapers/150000/144909.jpg',
                    duration: '1ч 40мин',
                    price: '220руб.',
                    time: '14:00',
                    date: '21 декабря'
                },
                {
                    title: 'Любовь до потери памяти',
                    img: 'https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_1280.jpg',
                    duration: '2ч 20мин',
                    price: '280руб.',
                    time: '12:20',
                    date: '1 августа'
                },
                {
                    title: 'Люкс № 13',
                    img: 'http://oboi.cc/uploads/11_05_2013/view/201304/oboik.ru_67906.jpg',
                    duration: '2ч 10мин',
                    price: '310руб.',
                    time: '12:50',
                    date: '14 июля'
                },
                {
                    title: 'Нам никогда не позабыть...',
                    img: 'https://media.istockphoto.com/videos/man-opening-arms-facing-city-by-night-video-id843455308?s=640x640',
                    duration: '1ч 40мин',
                    price: '150руб.',
                    time: '11:00',
                    date: '24 сентября'
                },

            ],
            repertory: [
                {
                    title: 'Приключения Бонифация',
                    img: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Colorful-Abstract-Backgrounds.jpg',
                    duration: '1ч 55 мин',
                    price: '250руб.'
                },
                {
                    title: 'Мужчина к празднику',
                    img: 'https://newevolutiondesigns.com/images/freebies/rainbow-wallpaper-11.jpg',
                    duration: '1ч 20мин',
                    price: '350руб.'
                },
                {
                    title: 'Любовь до потери памяти',
                    img: 'https://cdn.wallaps.com/wallpapers/150000/144909.jpg',
                    duration: '1ч 40мин',
                    price: '220руб.'
                },
                {
                    title: 'Любовь до потери памяти',
                    img: 'https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_1280.jpg',
                    duration: '2ч 20мин',
                    price: '280руб.'
                },
                {
                    title: 'Люкс № 13',
                    img: 'http://oboi.cc/uploads/11_05_2013/view/201304/oboik.ru_67906.jpg',
                    duration: '2ч 10мин',
                    price: '310руб.'
                },
                {
                    title: 'Нам никогда не позабыть...',
                    img: 'https://media.istockphoto.com/videos/man-opening-arms-facing-city-by-night-video-id843455308?s=640x640',
                    duration: '1ч 40мин',
                    price: '150руб.'
                },

            ],
            people_of_theater_img: [
                {
                    people_of_theater_img: 'http://oboi.cc/uploads/11_05_2013/view/201304/oboik.ru_67906.jpg',
                }
            ]

        }
    }

    Delete = (i) => {
        let arr = this.state.add_slides1;
        arr.splice (i, 1);
        this.setState ({add_slides1: arr});
    };

    Delete2 = (i) => {
        let arr = this.state.add_slides2;
        arr.splice (i, 1);
        this.setState ({add_slides2: arr});
    };

    Delete3 = (i) => {
        let arr = this.state.repertory;
        arr.splice (i, 1);
        this.setState ({repertory: arr});
    };

    Delete4 = (i) => {
        let arr = this.state.timetable;
        arr.splice (i, 1);
        this.setState ({timetable: arr});
    };

    Delete5 = (i=1) => {
        let arr = this.state.people_of_theater_img;
        arr.splice (i, 1);
        this.setState ({people_of_theater_img: arr});
    };


    render() {

        return(
            <div id="content_container">

                <div id="main_page_header" name="slider1">
                    <a>Главная страница</a>
                </div>

                    <div id="main_page_content_slider1">
                        <h3>Слайдер мероприятия</h3>
                        <div id="main_page_content_slider1_cont">

                            <div id="main_page_content_slider1_left">
                                <div id="slider1_title">
                                    <a>Название:</a>
                                    <input type="text"/>
                                </div>

                                <div id="slider1_img">
                                    <a>Загрузить изображение:</a>
                                    <div id="slider1_img_block">
                                        <label>
                                            <input type="file" name="photo" multiple accept="image/*" />
                                            <span>Загрузить</span>
                                        </label>
                                    </div>
                                </div>

                                <div id="slider1_date">
                                    <a>Дата спектакля:</a>
                                    <input type="date" id="date" name="slider2"/>
                                </div>

                                <div id="slider1_button_save">
                                    <input type="submit" value="Добавить" />
                                </div>
                            </div>

                            <div id="main_page_content_slider1_right">
                                <a>Список добавленных слайдов</a>
                                    <div id="main_page_content_slider1_right_cont">
                                    {this.state.add_slides1.map((item, i) => {
                                        return (
                                            <div className={"add_slider1 " + {i}} key={i}>
                                                <div className="add_slider1_background-img" style={{backgroundImage: "url(" + item.img + ")"}} />
                                                <div className="add_slider1_name"><a>{item.title}</a></div>
                                                <div className="add_slider1_date"><a>{item.date}</a></div>
                                                <div className="add_slider1_close" onClick={() => this.Delete(i)}><img src="./close.png"/></div>
                                            </div>
                                        );
                                    })}
                                    </div>
                            </div>

                        </div>
                    </div>




                <div id="main_page_content_slider2">
                    <h3>Слайдер новости</h3>
                    <div id="main_page_content_slider2_cont">

                        <div id="main_page_content_slider2_left">
                            <div id="main_page_content_slider2_left_con">
                                <div id="slider2_title">
                                    <a>Название:</a>
                                    <input type="text"/>
                                </div>

                                <div id="slider2_img">
                                    <a>Загрузить изображение:</a>
                                    <div id="slider2_img_block">
                                        <label>
                                            <input type="file" name="photo" multiple accept="image/*" />
                                            <span>Загрузить</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div id="slider2_text">
                                <a>Отрезок текста спектакля</a>
                                <textarea type="text" name="text"/>
                            </div>

                            <div id="slider2_button_save">
                                <input type="submit" value="Добавить" />
                            </div>
                        </div>

                        <div id="main_page_content_slider2_right">
                            <a>Список добавленных слайдов</a>
                            <div id="main_page_content_slider2_right_cont">
                                {this.state.add_slides2.map((item, i) => {
                                    return (
                                        <div className={"add_slider2 " + {i}} key={i}>
                                            <div className="add_slider2_con">
                                                <div className="add_slider2_name"><a>{item.title}</a></div>
                                                <div className="add_slider2_background-img" style={{backgroundImage: "url(" + item.img + ")"}} />
                                            </div>
                                            <div className="add_slider2_text"><a>{item.text}</a></div>
                                            <div className="add_slider2_close" onClick={() => this.Delete2(i)}><img src="./close.png"/></div>
                                        </div>
                                    );
                                })}
                                <div name="repertory" />
                            </div>
                        </div>

                    </div>
                </div>

                <div id="main_page_repertory">
                    <div className="header_h3"><h3>Репертуар</h3></div>
                    <div id="main_page_repertory_add">
                        <div className="flex_decoration_column">
                            <div id="main_page_repertory_add_title">
                                <a>Название:</a>
                                <input type="text"/>
                            </div>
                            <div id="main_page_repertory_add_img">
                                <a>Загрузить изображение:</a>
                                <div id="main_page_repertory_add_img_block">
                                    <label>
                                        <input type="file" name="photo" multiple accept="image/*" />
                                        <span>Загрузить</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex_decoration_column">
                            <div id="main_page_repertory_add_price">
                                <a>Цена билета:</a>
                                <input type="text"/>
                            </div>
                            <div id="main_page_repertory_add_duration">
                                <a>Продолжительность:</a>
                                <input type="text"/>
                            </div>
                        </div>

                        <div id="main_page_repertory_add_button_save">
                            <input type="submit" value="Добавить" />
                        </div>
                    </div>


                    <h3>Список добавленных слайдов репертуара</h3>
                    <div id="main_page_repertory_con">

                        {this.state.repertory.map((item, i) => {
                            return (
                                <div className={"main_page_repertory_container"} key={i}>
                                    <div className="main_page_repertory_close" onClick={() => this.Delete3(i)}><img src="./close.png"/></div>
                                    <div className="main_page_repertory_container_title"><a>{item.title}</a></div>
                                    <div className="main_page_repertory_container_background-img" style={{backgroundImage: "url(" + item.img + ")"}} />
                                    <div className="main_page_repertory_container_price"><a>Цена билета: {item.price}</a></div>
                                    <div className="main_page_repertory_container_duration" ><a>Продолжительность: {item.duration}</a></div>
                                </div>
                            );
                        })}
                        <div name="timetable"/>
                    </div>
                    
                </div>


                <div id="main_page_timetable">
                    <div className="header_h3"><h3>Расписание</h3></div>
                    <div id="main_page_timetable_add">
                        <div className="flex_decoration_column">
                            <div id="main_page_timetable_add_title">
                                <a>Название:</a>
                                <input type="text"/>
                            </div>
                            <div id="main_page_timetable_add_img">
                                <a>Загрузить изображение:</a>
                                <div id="main_page_timetable_add_img_block">
                                    <label>
                                        <input type="file" name="photo" multiple accept="image/*" />
                                        <span>Загрузить</span>
                                    </label>
                                </div>
                            </div>
                            <div id="main_page_timetable_add_date">
                                <a>Дата спектакля:</a>
                                <input type="date" id="date" name="date"/>
                            </div>
                        </div>

                        <div className="flex_decoration_column">
                            <div id="main_page_timetable_add_duration">
                                <a>Продолжительность:</a>
                                <input type="text"/>
                            </div>
                            <div id="main_page_timetable_add_time">
                                <a>Время:</a>
                                <input type="text"/>
                            </div>
                            <div id="main_page_timetable_add_price">
                                <a>Цена билета:</a>
                                <input type="text"/>
                            </div>
                        </div>

                        <div id="main_page_timetable_add_button_save">
                            <input type="submit" value="Добавить" />
                        </div>
                    </div>


                    <h3>Список добавленных слайдов репертуара</h3>
                    <div id="main_page_timetable_con">

                        {this.state.timetable.map((item, i) => {
                            return (
                                <div className={"main_page_timetable_container"} key={i}>
                                    <div className="main_page_timetable_close" onClick={() => this.Delete4(i)}><img src="./close.png"/></div>
                                    <div className="main_page_timetable_container_title"><a>{item.title}</a></div>
                                    <div className="main_page_timetable_container_background-img" style={{backgroundImage: "url(" + item.img + ")"}} />
                                    <div className="main_page_timetable_container_date_and_time_cont">
                                        <div className="main_page_timetable_container_date"><a>Дата: {item.date}</a></div>
                                        <div className="main_page_timetable_container_time"><a>Время: {item.time}</a></div>
                                    </div>
                                    <div className="main_page_timetable_container_duration"><a>Продолжительность: {item.duration}</a></div>
                                    <div className="main_page_timetable_container_price"><a>Цена билета: {item.price}</a></div>
                                </div>
                            );
                        })}


                    </div>
                </div>

                <div id="main_page_people_of_theater" name="main_page_people_of_theater">
                    <h3>Люди театра</h3>
                    <div id="main_page_people_of_theater_add_img">
                        <a>Загрузить изображение:</a>
                        <div id="main_page_people_of_theater_add_img_block">
                            <label>
                                <input type="file" name="photo" multiple accept="image/*" />
                                <span>Загрузить</span>
                            </label>
                        </div>
                    </div>
                    {this.state.people_of_theater_img.map((item, i) => {
                        return (
                    <div className="main_page_people_of_theater_add_container" key={i}>
                        <h3>Загруженное изображение</h3>

                        <div className="main_page_people_of_theater_close" onClick={() => this.Delete5(i)}><img src="./close.png"/></div>

                        <div className="main_page_people_of_theater_background-img" style={{backgroundImage: "url(" + item.people_of_theater_img + ")"}} />
                    </div>
                        );
                    })}
                </div>


                    



            </div>
        )
    }
}

ReactDOM.render (<All />, document.getElementById('root'));
