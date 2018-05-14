import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {render} from 'react-dom';
import './admin.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

let screen_height = window.screen.height;
console.log(screen_height);

class All extends React.Component {
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
            admin_name: "Slowe",
            left_menu_close: false,
            right_menu_close: false,
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

    render() {
        const { left_menu_close } = this.state;
        const { right_menu_close } = this.state;

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
                                <a>Главная страница</a>
                            </div>
                        </a>
                        <a href="#">
                            <div id="button_exit">
                                <a>Выйти</a>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="container">

                    {   left_menu_close &&
                        <div id="left_menu">
                            <div id="close_left_menu" onClick={this.Close_left_menu}>
                                <img src="./img/close.png"/>
                            </div>
                            <div id="left_menu_content">
                                <div className="left_menu_content 1">
                                    <a>Главная страница</a>
                                </div>
                                <div className="left_menu_content 2">
                                    <a>Бронирование и оплата</a>
                                </div>
                                <div className="left_menu_content 3">
                                    <a>О спектакле</a>
                                </div>
                                <div className="left_menu_content 4">
                                    <a>Новость спектакля</a>
                                </div>
                                <div className="left_menu_content 5">
                                    <a>Люди театра</a>
                                </div>
                            </div>
                        </div>
                    }
                    {   !left_menu_close &&
                    <div id="left_menu_icon" onClick={this.Open_left_menu}>
                        <img src="./img/menu.png"/>
                    </div>
                    }

                    <div id="content_and_menu">
                        <Major_page />
                        {   right_menu_close &&
                            <div id="right_menu">
                                <div id="close_right_menu" onClick={this.Close_right_menu}>
                                    <img src="./img/close.png"/>
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
                            <img src="./img/menu.png"/>
                        </div>
                        }
                    </div>
                </div>
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
                                        <a>Загрузить</a>
                                    </div>
                                </div>

                                <div id="slider1_date">
                                    <a>Дата спектакля:</a>
                                    <input type="date" id="date" name="slider2"/>
                                </div>

                                <div id="slider1_button_save">
                                    <a>Добавить</a>
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
                                                <div className="add_slider1_close" onClick={() => this.Delete(i)}><img src="./img/close.png"/></div>
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
                                        <a>Загрузить</a>
                                    </div>
                                </div>
                            </div>

                            <div id="slider2_text">
                                <a>Отрезок текста спектакля</a>
                                <textarea type="text" name="text"/>
                            </div>

                            <div id="slider2_button_save">
                                <a>Добавить</a>
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
                                            <div className="add_slider2_close" onClick={() => this.Delete2(i)}><img src="./img/close.png"/></div>
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
                                    <a>Загрузить</a>
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
                            <a>Добавить</a>
                        </div>
                    </div>


                    <h3>Список добавленных слайдов репертуара</h3>
                    <div id="main_page_repertory_con">

                        {this.state.repertory.map((item, i) => {
                            return (
                                <div className={"main_page_repertory_container"} key={i}>
                                    <div className="main_page_repertory_close" onClick={() => this.Delete3(i)}><img src="./img/close.png"/></div>
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
                                    <a>Загрузить</a>
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
                            <a>Добавить</a>
                        </div>
                    </div>


                    <h3>Список добавленных слайдов репертуара</h3>
                    <div id="main_page_timetable_con">

                        {this.state.timetable.map((item, i) => {
                            return (
                                <div className={"main_page_timetable_container"} key={i}>
                                    <div className="main_page_timetable_close" onClick={() => this.Delete4(i)}><img src="./img/close.png"/></div>
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
                            <a>Загрузить</a>
                        </div>
                    </div>
                    {this.state.people_of_theater_img.map((item, i) => {
                        return (
                    <div className="main_page_people_of_theater_add_container">
                        <h3>Загруженное изображение</h3>

                        <div className="main_page_people_of_theater_close" onClick={() => this.Delete5(i)}><img src="./img/close.png"/></div>

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
