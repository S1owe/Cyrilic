import React, {Component} from 'react'
import {render} from 'react-dom'
import './repertory.css';

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component'
}

class Slider extends Component {
    constructor(props) {
        super(props);
        
        let { date } = props;
        let { button } = props;
        let { time } = props;
        let { title } = props;
        let { img } = props;
        let { duration } = props;
        let { price } = props;
        let { table_img } = props;
        let { table_name } = props;
        let { table_date } = props;
        let { table_length } = props;
        let { table_price } = props;
        let { table_button } = props;
        let { table_time } = props;
        let { title_href } = props;


        this.state = {
            date: [ ...date],
            button: [ ...button],
            time: [ ...time],
            title: [ ...title],
            img: [ ...img],
            duration: [ ...duration],
            price: [ ...price],
            table_img: [ ...table_img],
            table_name: [ ...table_name],
            table_date: [ ...table_date],
            table_length: [ ...table_length],
            table_price: [ ...table_price],
            table_button: [ ...table_button],
            table_time: [ ...table_time],
            title_href: [ ...title_href],

            but_state: true
        };
        this.right_button = this.right_button.bind(this);
        this.left_button = this.left_button.bind(this);
    }

    right_button() {
        // check if box is currently opened
        this.setState({
            but_state: false,
        });
    }

    left_button() {
        // check if box is currently opened
        this.setState({
            but_state: true,
        });
    }

    render() {
        let { title_href, date, button, time, title, img, duration, price, table_img, table_name, table_date, table_length, table_price, table_button, table_time} = this.state;
        const { but_state } = this.state;
       /* function test() {
            but_test = !but_test;
            alert(but_test)
        }     */

        return (
            <div>
                <div id="repertory_background">
                    <div id="repertory_container">
                        <div id="repertory_head">
                            <div id="repertory_head_left">
                                <aside>
                                    <a onClick={this.left_button}>Репертуар</a>
                                </aside>
                            </div>
                            <div id="repertory_head_right">
                                <aside><a onClick={this.right_button}>Расписание</a></aside>
                            </div>
                        </div>

                        { but_state && (

                            <div id="repertory_content">
                                {
                                    button.map((button, index) =>
                                        <div className="repertory_block" key={"repertory_block_" + [index]}>
                                            <div className={"repertory_content_" + [index]}>

                                                <div className={"repertory_content_date"}>
                                                    {date[index]}
                                                </div>

                                                <div className={"repertory_content_time"}>
                                                    {time[index]}
                                                </div>

                                                <div className={"repertory_content_title"}>
                                                    <a href={title_href[index]}>{title[index]}</a>
                                                </div>

                                                <div className={"repertory_content_img"}>
                                                    <a href={title_href[index]}><img key={"repertory_content_img_" + [index]} alt="img" className="repertory_content_img_image" src={img[index]} /></a>
                                                </div>

                                                <div className={"repertory_content_duration"}>
                                                    <a>Продолжительность: </a>
                                                    <aside>
                                                        {duration[index]}
                                                    </aside>
                                                </div>

                                                <div className={"repertory_content_price"}>
                                                    <a>Цена билета: </a>
                                                    <aside>
                                                        {price[index]}
                                                    </aside>
                                                </div>

                                                <div className={"repertory_content_button"}>
                                                    <a href={button} key={"repertory_content_button" + [index]}>
                                                        <div key={"repertory_content_button_" + [index]} className={"repertory_content_button_inside"} >
                                                            <u>Подробнее</u>
                                                        </div>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                        )}

                        {  !but_state &&
                            (
                                <div id="table_content">
                                    <div id="table_head">
                                        <div id="table_head_left" className="table_head_title"/>
                                        <div className="table_head_title" id="table_head_name"><a>Название</a></div>
                                        <div className="table_head_title" id="table_head_date"><a>Дата</a></div>
                                        <div className="table_head_title" id="table_head_time"><a>Время</a></div>
                                        <div className="table_head_title" id="table_head_length"><a>Длительность</a></div>
                                        <div className="table_head_title" id="table_head_price"><a>Цена</a></div>
                                        <div id="table_head_right" className="table_head_title"/>
                                    </div>

                                    <div id="table_content2">
                                        {
                                        table_img.map((table_img, index) =>
                                            <div className={"table_info_cont_" + [index]}>
                                                <div className={"table_info"}>
                                                    <div className={"table_info_img"}>
                                                        <img key={"table_info_img" + [index]} alt="img" className="table_info_img_image" src={table_img} />
                                                    </div>

                                                    <div className={"table_info_name"}>
                                                        {table_name[index]}
                                                    </div>

                                                    <div className={"table_info_date"}>
                                                        {table_date[index]}
                                                    </div>

                                                    <div className={"table_info_time"}>
                                                        {table_time[index]}
                                                    </div>

                                                    <div className={"table_info_length"}>
                                                        {table_length[index]}
                                                    </div>

                                                    <div className={"table_info_price"}>
                                                        {table_price[index]}
                                                    </div>

                                                    <div className={"table_info_button"}>
                                                        <a href={table_button[index]}>Купить</a>
                                                    </div>
                                                </div>

                                                <div className="table_info_border" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                    </div>
                </div>
            </div>
        )
    }
}

function withTestImages(WrappedComponent) {

    let date = [
        '23 Февраль',
        '1 Марта',
        '8 Марта',
        '1 Апреля',
    ];

    let time = [
        'Пятница 17:00',
        'Четверг 15:00',
        'Среда 18:00',
        'Пятница 17:00',
    ];

    let title = [
        'День Защитника Отечества',
        'Мужчина к празднику',
        'Как боги',
        'Наедине со всеми',
    ];

    let title_href = [
        '#1',
        '#2',
        '#3',
        '#4',
    ];

    let img = [
        'https://moscowcharity.ru/wp-content/uploads/2017/04/Teatr_E%60kspromt_2-600x600.jpg',
        'http://uploads.likengo.ru/uploads/afishacover/48/9c/14423a151c998fabecbde86d0c32.jpg',
        'http://uploads.likengo.ru/uploads/afishacover/2f/6a/5e1d042981de4fba0e9a4d445afc.jpg',
        'https://mysplash.ru/uploads/afisha/r0/sg/6d178848c78214c90682bc6d5835222d-600x600.jpg',
    ];

    let duration = [
        '1 ч 20 мин',
        '1 ч 20 мин',
        '1 ч 20 мин',
        '1 ч 20 мин',
    ];

    let price = [
        '250 руб.',
        '350 руб.',
        '200 руб.',
        '280 руб.',
    ];

    let button = [
        'https://www.yandex.ru/',
        'https://www.google.ru/',
        'https://yandex.ru/pogoda/penza?from=serp_title',
        'https://www.gismeteo.ru/',
    ];

    /* Расписание */

    let table_img = [
        'http://www.classicalmusicnews.ru/wp-content/uploads/2014/06/rekviem_eifman-100x100.jpeg',
        'http://www.actors.spb.ru/NOVIKOV/PHOTO/theater/Zhenitba/18_m.jpg',
        'http://sharypovo.today/engine/timthumb.php?src=http://www.2-999-999.ru/files/file/item/55AA57B4868245C792C3EEA79BB6CD13.jpg&w=100&h=100&q=75&zc=1',
        'https://img01.rl0.ru/afisha/e100x100q80i/s1.afisha.net/MediaStorage/fe/f8/9fe077d247a44fcaa867aa74f8fe.jpg'
    ];

    let table_name = [
        'День защитника Отечества',
        'День победы',
        'Красная шапочка',
        'История большой любви Стрельцовой'
    ];

    let table_date = [
        '23 Февраля',
        '9 мая',
        '12 апреля',
        '14 сентября'
    ];

    let table_time = [
        '12:00',
        '14:20',
        '16:00',
        '9:00'
    ];

    let table_length = [
        '1 ч 20 мин',
        '2 ч 10 мин',
        '1 ч 40 мин',
        '2 ч 20 мин'
    ];

    let table_price = [
        '250',
        '350',
        '450',
        '280'
    ];

    let table_button = [
        'https://www.yandex.ru/',
        'https://www.google.ru/',
        'https://yandex.ru/pogoda/penza?from=serp_title',
        'https://www.google.ru/'
    ];


    let Wrapper = props => <WrappedComponent title_href={title_href} date={date} time={time} title={title} img={img} duration={duration} price={price} button={button} table_img={table_img} table_name={table_name} table_date={table_date} table_length={table_length} table_price={table_price} table_button={table_button} table_time={table_time} {...props} />;

    Wrapper.displayName = `WithTestImages(${getDisplayName(WrappedComponent)})`;

    return Wrapper
}


const TestSlider = withTestImages(Slider);



render(
    <TestSlider />,
    document.getElementById('repertory')
);


/* -------------------------------------------------------- */

