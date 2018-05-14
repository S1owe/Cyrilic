import React, {Component} from 'react';
import {render} from 'react-dom';
import './perfomance.css';
import './animate.css';
import WOW from 'wowjs'
new WOW.WOW().init();
console.clear();
/*
function handleScroll(e) {
    let scroll_position = e.nativeEvent.target.scrollTop;
    console.log(scroll_position);
    let scroll_end = e.nativeEvent.target.scrollHeight - 350;
    console.log(scroll_end);
}    */

function parseUrl() {
    if (!window.location.search) return;
    const url = window.location.search.match(/\?(.+)/)[1].split('&');
    let res = {};
    url.forEach((entry) => {
        res[entry.split('=')[0]] = entry.split('=')[1];
    });
    return res;
}
let id = parseUrl()['id'];


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
        this.test2();
    }

    autoPlay = () => {
        if(this.props.autoPlay) {
            this.interval = setInterval(() => {
                this.nextSlide();
            }, this.props.timeToSlide);
        }
    };

    stopAutoPlay = () => {
        if(this.props.autoPlay && this.props.pauseOnMouseOver) {
            clearInterval(this.interval);
        }
    };

    handleKeys = () => {
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

    previousSlide = () => {
        let index = this.state.index;
        index--;
        if(index === -1) index = this.state.lastIndex;
        this.setSlide(index);
    };

    nextSlide = () => {
        let index = this.state.index;
        if(index === this.state.lastIndex) index = 0;
        else index++;
        this.setSlide(index);
    };

    setSlide = (i) => {
        this.setState({
            index: i
        });

    };


    test2 = () => {
        setInterval(() => {
            let lastIndex_slide = this.state.lastIndex + 1;
            let quarter = this.props.max_scroll/lastIndex_slide; /* занчения 1 фрагмента скролла */
            if(this.props.scroll_position <= quarter) {
                this.setSlide(0);
            } else
                for (let i = 1; i<lastIndex_slide; i++) {
                    if(quarter < this.props.scroll_position && this.props.scroll_position <= (this.props.max_scroll/lastIndex_slide)*(i+1)) {
                        this.setSlide(i);
                        break;
                    }
                }



        }, 500);
    };

    getSlides = () => {
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

    componentDidMount()
    {
        fetch(`/api.php?mode=performance&id=${id}`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                let arr1 = user.data[0].photos.split(';');
                this.setState({lastIndex : arr1.length-1,});
            })
            .catch((err) => {});
    }
    render() {
        const { index } = this.state;
        const { showDots } = this.props;
        let contentStyle = { left: index * -100 + "%" };
        const slides = this.getSlides();
        
        return (
            <section className="slider" >
                <section className="slider-content" style={contentStyle}>
                    {slides}
                </section>
                {
                    showDots && slides.length > 1 &&
                    <section className="slider-dots">
                        {slides.map((slide, i) => {
                            const onClick = i === index ? null : () => this.setSlide(i);
                            return <span key={i} className={`slider-dot ${i === index ? "selected" : ""}`}  />
                        })}
                    </section>
                }
            </section>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [

            ],
        };
    }

    componentDidMount()
    {
        fetch(`/api.php?mode=performance&id=${id}`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                let arr1 = user.data[0].photos.split(';');
                this.setState({
                    items : arr1.map(function(i){ return {image : `${i}`}}),
                    lastIndex : arr1.length,
                })
            })
            .catch((err) => {});
    }
    
    render() {
        const SlideSettings = {
            count: 1,
            autoPlay: false,
            timeToSlide: 2500,
            showDots: true,
            pauseOnMouseOver: false,
            responsive: [
                {
                    min_width: 700,
                    count: 2
                },
                {
                    min_width: 1000,
                    count: 1
                }
            ]
        };
        /*
        console.log(this.props.scroll_position);
        console.log(this.props.max_scroll);
           */
        return (
            <Slider {...SlideSettings} scroll_position={this.props.scroll_position} max_scroll={this.props.max_scroll}>
                {this.state.items.map((item, i) => {
                    return (
                        <section key={i} className="container">
                            <section className="image-section" style={{backgroundImage: "url(" + item.image + ")"}}>
                                
                            </section>
                        </section>
                    );
                })}
            </Slider>
        );
    }
}

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "О спектакле",
            text: "Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating. \n" +
            "\n" +
            "Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities. \n" +
            "\n" +
            "Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are. \n" +
            "\n" +
            "Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to. \n" +
            "\n" +
            "Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling. Of on am father by agreed supply rather either. Own handsome delicate its property mistress her end appetite. Mean are sons too sold nor said. Son share three men power boy you. Now merits wonder effect garret own. \n" +
            "\n" +
            "Whole wound wrote at whose to style in. Figure ye innate former do so we. Shutters but sir yourself provided you required his. So neither related he am do believe. Nothing but you hundred had use regular. Fat sportsmen arranging preferred can. Busy paid like is oh. Dinner our ask talent her age hardly. Neglected collected an attention listening do abilities.  \n",
            scroll_position: 0,
            max_scroll: 0,
            act: "Спектакль идет с одним антрактом",
            duration: "1 ч 20 мин"
        };
    }

    handleScroll = (e) => {
        this.setState({
            scroll_position : e.nativeEvent.target.scrollTop,
            max_scroll: e.nativeEvent.target.scrollHeight - 350
    });
    };
    componentDidMount()
    {
        fetch(`/api.php?mode=performance&id=${id}`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                if (user.data[0].intermissions > 1)
                this.setState({
                    text : user.data[0].description,
                    duration: user.data[0].timing,
                    act:`Спектакль идет с ${user.data[0].intermissions} антрактами`});
                else
                if (user.data[0].intermissions === 1)
                    this.setState({
                        text : user.data[0].description,
                        duration: user.data[0].timing,
                        act:`Спектакль идет с ${user.data[0].intermissions} антрактом`});
                else
                if (user.data[0].intermissions === 1)
                    this.setState({
                        text : user.data[0].description,
                        duration: user.data[0].timing,
                        act:`Спектакль идет без антрактов`});
            })
            .catch((err) => {});
    }

    render() {
        /*console.log('scrolling', this.state.scroll_position);     */
        return (
                <div id="Slider_container_performance">
                    <section className="text-section">
                        <section className="title-section pulse animated">
                            <h1>{this.state.title}</h1>
                        </section>
                        <section className="text-text-section" onScroll={ this.handleScroll } >
                            <div className="test">
                            <a>{this.state.text}</a>
                            </div>
                        </section>
                    </section>
                    <div id="Slider_img_container">
                        <div id="Slider_img_container_text" className="title-section fadeIn animated">
                            <div id="Slider_img_container_text_act">
                                <a>{this.state.act}</a>
                            </div>
                            <div id="Slider_img_container_text_duration">
                                <a>Продолжительность - {this.state.duration}</a>
                            </div>
                        </div>
                        <App scroll_position={this.state.scroll_position} max_scroll={this.state.max_scroll} />
                    </div>
                </div>
        );
    }
}


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title_author: "",
            title_name: "Альцина",
            title_activity: "Опера в двух действиях",
            title_activity_ege: "18+",
            button_href: "/index.html",
            clicked: false
        };
    }

    back_button_if = () => {
        this.setState({clicked : true})
    };

    back_button = () => {
        return ((this.state.clicked===true) ? 'animated bounceOutLeft' :'');
    };


    button_href = () => {
       if (this.state.clicked===true) {
           {document.location.href=(this.state.button_href)}
       }
    };

    componentDidMount()
    {
        fetch(`/api.php?mode=performance&id=${id}`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                if(user.data[0].actions > 1)
                this.setState({
                    title_name : user.data[0].name,
                    title_activity: `Спектакль в ${user.data[0].actions} действиях`,
                    title_activity_ege: `${user.data[0].age}+`
                });
                else
                    this.setState({
                        title_name : user.data[0].name,
                        title_activity: `Спектакль в ${user.data[0].actions} действие`,
                        title_activity_ege: `${user.data[0].age}+`
                    });
            })
            .catch((err) => {});
    }
    render() {
        return (
            <div id="header_and_button_cont">
                <div id="button_cont" className={this.back_button()} onClick={this.back_button_if}>
                    <a onSubmit={this.button_href()}>
                        <div id="back_button" >
                            <img src="./img/page_performance_back_button.png"/>
                            <a>Назад</a>
                        </div>
                    </a>
                </div>
                <div id="Header">
                    <div id="Header_author" className="flipInX animated">
                        <a>{this.state.title_author}</a>
                    </div>
                    <div id="Header_name" className="bounceInDown animated">
                        <a>{this.state.title_name}</a>
                    </div>
                    <div id="Header_container" className="flipInX animated">
                        <div id="Header_activity">
                            <a>{this.state.title_activity}</a>
                        </div>
                        <div id="Header_activity_ege">
                            <a>{this.state.title_activity_ege}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* People slider */

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    first_name: "",
                    second_name: "",
                    title_of_performance: "",
                    title_of_part: "",
                }
            ]
        };
    }

    componentDidMount() {
        fetch(`/api.php?mode=performance&id=${id}`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                let arr = user.data[0].actors.map(function(i){ return i});
                let arr3=  arr.filter((i)=> i.speciality === `Актер`);
                let first=  arr3.map(function(i){
                    let k = i.name.split(' ');
                    return k[0]
                });
                let second= arr3.map(function(i){
                    let k = i.name.split(' ');
                    return k[1]
                });
                let arr2=[];
                for(let q=0; q<first.length;q++)
                {
                    arr2.push({first_name:first[q],second_name : second[q]})
                }
                console.log(arr2);
                this.setState ({
                    items : arr2.map(function(i){ return i}),
                });
            })
            .catch((err) => {});
    }

    render() {
        const SlideSettings = {
            count: 8,
            autoPlay: false,
            timeToSlide: 2500,
            showDots: false,
            pauseOnMouseOver: false,
            
        };
        
        return (
            <div id="Characters_container">
                <div id="Characters_container_header">
                    <a>Действующие лица и исполнители</a>
                </div>
                <People_slider {...SlideSettings}>
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="slider_people_cont" key={i}>
                                <div className="slider_characters_circle">
                                    <a>{item.first_name}</a>
                                    <a>{item.second_name}</a>
                                </div>
                                <div className="slider_characters_text">
                                    <a>{item.title_of_performance}</a>
                                    <a>{item.title_of_part}</a>
                                </div>
                            </div>
                        );
                    })}
                </People_slider>
            </div>
        );
    }
}

class People_slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            count: props.count,
            lastIndex: Math.ceil(props.children.length / props.count) - 1,
            interval: null
        };
        this.handleKeys();
    }

    handleKeys = () => {
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



    previousSlide = () => {
        let index = this.state.index;
        index--;
        if(index === -1) index = this.state.lastIndex;
        this.setSlide(index);
    };

    nextSlide = () => {
        let index = this.state.index;
        if(index === this.state.lastIndex) index = 0;
        else index++;
        this.setSlide(index);
    };

    setSlide = (i) => {
        this.setState({
            index: i
        });
    };

    getSlides = () => {
        const { children } = this.props;
        let slides = [];
        let i = 0;
        while(i < children.length) {
            let slideItems = [];
            for(let j = 0; j < this.state.count && i < children.length; j++) {
                let slideItem = (
                    <section key={i} className="Characters_slider-item">
                        {children[i]}
                    </section>
                );
                slideItems.push(slideItem);
                i++;
            }
            let slide = (
                <section key={i} className="Characters_slider-slide">
                    {slideItems}
                </section>
            );
            slides.push(slide);
        }
        return slides;
    };


    render() {
        const { index } = this.state;
        const { showDots } = this.props;
        let contentStyle = { left: index * -100 + "%" };
        const slides = this.getSlides();

        return (
            <div id="Characters_slider_con">
                <div id="Characters_button_left" onClick={this.previousSlide}><div id="Characters_button_left_img" /></div>
            <section className="Characters_slider" onMouseOver={this.stopAutoPlay}>

                        <section className="Characters_slider-content" style={contentStyle}>
                            {slides}
                        </section>

                
                {
                    showDots && slides.length > 1 &&
                    <section className="Characters_slider-dots">
                        {slides.map((slide, i) => {
                            const onClick = i === index ? null : () => this.setSlide(i);
                            return <span key={i} className={`Characters_slider-dot ${i === index ? "selected" : ""}`} onClick={onClick} />
                        })}
                    </section>
                }
            </section>
                <div id="Characters_button_right" onClick={this.nextSlide}>
                    <div id="Characters_button_right_img" />
                </div>
            </div>
        );
    }
}

class Producer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    post: "Дирижер-постановщик",
                    name: "Андреа Маркен",
                    img: "http://moviez.su/uploads/posts/2013-02/1359904957_ryan-gosling-005-990x742.jpg",
                },
                {
                    post: "Дирижер-постановщик",
                    name: "Андреа Маркен",
                    img: "http://i.ucrazy.ru/files/i/2011.4.25/1303679207_16.jpg",
                },
                {
                    post: "Дирижер-постановщик",
                    name: "Андреа Маркен",
                    img: "https://get.wallhere.com/photo/women-face-portrait-blue-eyes-1151930.jpg",
                }
                    ]
        };
    }
    componentDidMount() {
        fetch(`/api.php?mode=performance&id=${id}`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                let arr = user.data[0].actors.map(function(i){ return i});
                let arr3=  arr.filter((i)=> i.speciality !== `Актер`);
                let name=  arr3.map(function(i){  return i.name});
                let post=  arr3.map(function(i){  return i.speciality});
                let img=  arr3.map(function(i){ return i.photo});
                let arr2=[];
                for(let q=0; q<name.length;q++)
                {
                    arr2.push({name : name[q], post: post[q], img: img[q]})
                }
                console.log(arr2);
                this.setState ({
                    items : arr2.map(function(i){ return i}),
                });
            })
            .catch((err) => {});
    }

    render() {
        return (
            <div id="Producer_container">
                <div id="Producer_header" className="wow swing">
                    <a>Постановщики</a>
                </div>
                <div id="Producer_content">
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="Producer_content_container" key={i}>
                                <div className="Producer_content_img wow fadeIn" style={{backgroundImage: "url(" + item.img + ")"}}/>
                                <div className="slider_producer_text">
                                    <div className="slider_producer_post">
                                        <a>{item.post}</a>
                                    </div>
                                    <div className="slider_producer_name">
                                        <a>{item.name}</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="all_container">
                <Header />
                <Text/>
                <Characters/>
                <Producer/>
            </div>
        );
    }
}


render(
    <All />,
    document.getElementById('root')
);


/* -------------------------------------------------------- */

