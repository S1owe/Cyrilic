import React, {Component} from 'react'
import {render} from 'react-dom'
import './repertory.css';

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component'
}




let test = window.screen.height;

console.clear();

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            count: props.count,
            lastIndex: 1,
            interval: null
        };
        this.handleKeys();
        this.interval = false;
        this.autoPlay();
    }

    autoPlay  = () => {
        if(this.props.autoPlay) {
            this.interval = setInterval(() => {
                this.nextSlide();
            }, this.props.timeToSlide);
        }
    };

    stopAutoPlay  = () =>  {
        if(this.props.autoPlay && this.props.pauseOnMouseOver) {
            clearInterval(this.interval);
        }
    };

    handleKeys  = () =>  {
        document.addEventListener('keydown', (event) => {
            const key = event.keyCode;
            switch(key) {
                case 37: this.previousSlide();
                    break;
                case 39: this.nextSlide();
                    break;
            }
        });
    };

    previousSlide  = () =>  {
        let index = this.state.index;
        index--;
        if(index === -1) index = this.state.lastIndex;
        this.setSlide(index);
    };

    nextSlide  = () =>  {
        let index = this.state.index;
        if(index === this.state.lastIndex) index = 0;
        else index++;
        this.setSlide(index);
    };

    setSlide =  (i) =>  {
        this.setState({
            index: i
        });
    };

    getSlides  = () =>  {
        const { children } = this.props;
        let slides = [];
        let i = 0;
        while(i < children.length) {
            let slideItems = [];
            for(let j = 0; j < this.state.count && i < children.length; j++) {
                let slideItem = (
                    <section key={i} className="slider-item">
                        {children[i]}
                    </section>
                );
                slideItems.push(slideItem);
                i++;
            }
            let slide = (
                <section key={i} className="slider-slide">
                    {slideItems}
                </section>
            );
            slides.push(slide);
        }
        return slides;
    };
	componentWillMount() {

		fetch(`/api.php?mode=repertoire`)
			.then((data) =>{
				return data.json();})				
					.then((user) => {
                        let arr1 = user.data.map(function(i){return i});
                        console.log(parseInt(arr1.length/4,10));
                        if (arr1.length%4===0)
                            this.setState ({

                                lastIndex : parseInt(arr1.length/4-1,10)

                            });
                        else
                            this.setState ({

                                lastIndex : parseInt(arr1.length/4,10)

                            });

                    })
							.catch((err) => {});
  
    }

    render() {
        const { index } = this.state;
        const { showDots } = this.props;
        let contentStyle = { left: index * -100 + "%" };
        const slides = this.getSlides();

        return (
            <div id="slider_3_cont" onMouseOver={this.stopAutoPlay} onMouseOut={this.autoPlay}>
                <div id="slider_button_left" onClick={this.previousSlide}>

                </div>
                <section className="slider">

                    <section className="slider-content" style={contentStyle}>
                        {slides}
                    </section>

                    {
                        showDots && slides.length > 1 &&
                        <section className="slider-dots">
                            {slides.map((slide, i) => {
                                const onClick = i === index ? null : () => this.setSlide(i);
                                return <span key={i} className={`slider-dot ${i === index ? "selected" : ""}`} onClick={onClick} />
                            })}
                        </section>
                    }
                </section>
                <div id="slider_button_right" onClick={this.nextSlide}>

                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [

                // 1 четверка
                {
                    title: "День Защитника Отечества",
                    title_href: "#1",
                    image: "https://moscowcharity.ru/wp-content/uploads/2017/04/Teatr_E%60kspromt_2-600x600.jpg",
                    duration: "1 ч 20 мин",
                    price: "250 руб.",
                    button: "https://www.yandex.ru/"

                },
                {
                    title: "Мужчина к празднику",
                    title_href: "#2",
                    image: "http://uploads.likengo.ru/uploads/afishacover/48/9c/14423a151c998fabecbde86d0c32.jpg",
                    duration: "1 ч 20 мин",
                    price: "350 руб.",
                    button: "https://www.google.ru/"
                },
                {
                    title: "Как боги",
                    title_href: "#3",
                    image: "http://uploads.likengo.ru/uploads/afishacover/2f/6a/5e1d042981de4fba0e9a4d445afc.jpg",
                    duration: "1 ч 20 мин",
                    price: "250 руб.",
                    button: "https://yandex.ru/pogoda/penza?from=serp_title"
                },
                {
                    title: "Наедине со всеми",
                    title_href: "#4",
                    image: "https://mysplash.ru/uploads/afisha/r0/sg/6d178848c78214c90682bc6d5835222d-600x600.jpg",
                    duration: "1 ч 20 мин",
                    price: "150 руб.",
                    button: "https://www.gismeteo.ru/"
                },


                // 2 четверка

                {
                    title: "День Защитника Отечества",
                    title_href: "#1",
                    image: "https://moscowcharity.ru/wp-content/uploads/2017/04/Teatr_E%60kspromt_2-600x600.jpg",
                    duration: "1 ч 20 мин",
                    price: "250 руб.",
                    button: "https://www.yandex.ru/"

                },
                {
                    title: "Мужчина к празднику",
                    title_href: "#2",
                    image: "http://uploads.likengo.ru/uploads/afishacover/48/9c/14423a151c998fabecbde86d0c32.jpg",
                    duration: "1 ч 20 мин",
                    price: "450 руб.",
                    button: "https://www.google.ru/"
                },
                {
                    title: "Как боги",
                    title_href: "#3",
                    image: "http://uploads.likengo.ru/uploads/afishacover/2f/6a/5e1d042981de4fba0e9a4d445afc.jpg",
                    duration: "1 ч 20 мин",
                    price: "550 руб.",
                    button: "https://yandex.ru/pogoda/penza?from=serp_title"
                },
                {
                    title: "Наедине со всеми",
                    title_href: "#4",
                    image: "https://mysplash.ru/uploads/afisha/r0/sg/6d178848c78214c90682bc6d5835222d-600x600.jpg",
                    duration: "1 ч 20 мин",
                    price: "50 руб.",
                    button: "https://www.gismeteo.ru/"
                },

                // 3 четверка

                {
                    title: "День Защитника Отечества",
                    title_href: "#1",
                    image: "https://moscowcharity.ru/wp-content/uploads/2017/04/Teatr_E%60kspromt_2-600x600.jpg",
                    duration: "1 ч 20 мин",
                    price: "250 руб.",
                    button: "https://www.yandex.ru/"

                },
                {
                    title: "Мужчина к празднику",
                    title_href: "#2",
                    image: "http://uploads.likengo.ru/uploads/afishacover/48/9c/14423a151c998fabecbde86d0c32.jpg",
                    duration: "1 ч 20 мин",
                    price: "200 руб.",
                    button: "https://www.google.ru/"
                },
                {
                    title: "Как боги",
                    title_href: "#3",
                    image: "http://uploads.likengo.ru/uploads/afishacover/2f/6a/5e1d042981de4fba0e9a4d445afc.jpg",
                    duration: "1 ч 20 мин",
                    price: "350 руб.",
                    button: "https://yandex.ru/pogoda/penza?from=serp_title"
                },
                {
                    name: "Наедине со всеми",
                    title_href: "#4",
                    photos: "https://mysplash.ru/uploads/afisha/r0/sg/6d178848c78214c90682bc6d5835222d-600x600.jpg",
                    duration: "1 ч 20 мин",
                    price: "150 руб.",
                    button: "https://www.gismeteo.ru/"
                },

            ]
        };
    }
	componentWillMount() {
		fetch(`/api.php?mode=repertoire`)
			.then((data) =>{
				return data.json();})				
					.then((user) => {
						let arr = user.data.map(function(i){return i});
						console.log(arr);
						this.setState ({
							items: arr,
							// lastIndex : arr.length,
						// title : arr.map(function(i){return i.name}),
						// text : arr.map(function(i){return i.description}),
						// images : arr.map(function(i){return i.photos}),
						// date : arr.map(function(i){ let  k =  i.date.split (' '); return k[0]}),
						// month : arr.map(function(i){ let  k =  i.date.split (' '); return k[1]}),
						// button : arr.map(function(i){return `/newpage.html?id=${i.id_news}`}),
						});


						
						})
							.catch((err) => {});
	}
    

    render() {
        const SlideSettings = {
            count: 4,
            autoPlay: true,
            timeToSlide: 10000,
            showDots: false,
            pauseOnMouseOver: true,
        }
        return (
            <Slider {...SlideSettings}>
                {this.state.items.map((item, index) => {
                    return (
                        <section key={index} className="container">
                            <div className="repertory_block" key={"repertory_block_" + [index]}>
                                <div className={"repertory_content_" + [index%2]}>

                                    <div className={"repertory_content_title"}>
                                        <a href={item.title_href}>{item.name}</a>
                                    </div>

                                    <div className={"repertory_content_img"}>
                                        <a href={item.title_href}>
                                            <div key={"repertory_content_img_" + [index]} alt="img" className="repertory_content_img_image">
                                                <div key={"repertory_content_img_" + [index]} alt="img" className="repertory_content_img_image_all" style={{backgroundImage: "url(" + item.photos + ")", height:(test/5) + 'px'}} />
                                            </div>

                                        </a>
                                    </div>

                                    <div className={"repertory_content_duration"}>
                                        <a>Продолжительность: </a>
                                        <aside>
                                            {item.timing}
                                        </aside>
                                    </div>

                                    <div className={"repertory_content_price"}>
                                        <a>Цена билета: </a>
                                        <aside>
                                            {item.price}
                                        </aside>
                                    </div>

                                    <div className={"repertory_content_button"}>
                                        <a href={`/perfomance.html?id=${index+1}` }key={"repertory_content_button" + [index]}>
                                            <div key={"repertory_content_button_" + [index]} className={"repertory_content_button_inside"} >
                                                <u>Подробнее</u>
                                            </div>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </section>
                    );
                })}
            </Slider>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);

        let { table_img } = props;
        let { table_name } = props;
        let { table_date } = props;
        let { table_length } = props;
        let { table_price } = props;
        let { table_button } = props;
        let { table_time } = props;

        this.state = {
            table_img: [ ...table_img],
            table_name: [ ...table_name],
            table_date: [ ...table_date],
            table_length: [ ...table_length],
            table_price: [ ...table_price],
            table_button: [ ...table_button],
            table_time: [ ...table_time],

            but_state: true
        };
        this.right_button = this.right_button.bind(this);
        this.left_button = this.left_button.bind(this);
    }


	componentDidMount() {
		fetch(`/api.php?mode=sessions`)
			.then((data) =>{console.log(data);
				return data.json();})				
					.then((user) => {console.log(user);
						let arr2 = user.data.map(function(i){return i});
						console.log(arr2);
						this.setState ({
						table_name : arr2.map(function(i){return i.name}),
						table_price: arr2.map(function(i){return i.prices}),
						table_time: arr2.map(function(i){return i.time}),
						table_length: arr2.map(function(i){return i.timing}),
						table_img : arr2.map(function(i){return i.photos}),
						table_date : arr2.map(function(i){ return i.date}),
						});						
						})
							.catch((err) => {});
  
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
        let {  img, table_img, table_name, table_date, table_length, table_price, table_button, table_time} = this.state;
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
                                    <App/>
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
                                                        <a href={`/booking.html?id=${index+1}`} key={"table_info_button" + [index]} >Купить</a>
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


    let Wrapper = props => <WrappedComponent table_img={table_img} table_name={table_name} table_date={table_date} table_length={table_length} table_price={table_price} table_button={table_button} table_time={table_time} {...props} />;

    Wrapper.displayName = `WithTestImages(${getDisplayName(WrappedComponent)})`;

    return Wrapper
}


const TestSlider = withTestImages(Content);



render(
    <TestSlider />,
    document.getElementById('repertory')
);


/* -------------------------------------------------------- */
