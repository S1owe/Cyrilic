import React, {Component} from 'react'
import {render} from 'react-dom'
import './index_news.css';

console.clear();

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

class Slider extends Component {
    /*static defaultProps = {
        count: 1,
        autoPlay: false,
        timeToSlide: 5000,
        showDots: true,
        pauseOnMouseOver: true,
        responsive: []
    };   */

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

    autoPlay = ()  => {
        if(this.props.autoPlay) {
            this.interval = setInterval(() => {
                this.nextSlide();
            }, this.props.timeToSlide);
        }
    };

    stopAutoPlay  =() =>  {
        if(this.props.autoPlay && this.props.pauseOnMouseOver) {
            clearInterval(this.interval);
        }
    };

    handleKeys  =() =>  {
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

    previousSlide = () =>  {
        let index = this.state.index;
        index--;
        if(index === -1) index = this.state.lastIndex;
        this.setSlide(index);
    };

    nextSlide = () =>  {
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

    getSlides =()  => {
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

    identifyCount = () =>  {
        const { count, children } = this.props;
        let currentCount = count;
        
        if(currentCount !== this.state.count) {
            this.setState({
                index: 0,
                count: currentCount,
                lastIndex: Math.ceil(children.length / currentCount) - 1
            });
        }
    };

    componentWillMount() {
        this.identifyCount();
    }
	
	componentDidMount() {

		fetch(`/api.php?mode=news&id=${id}`)
			.then((data) =>{
				return data.json();})				
					.then((user) => {
						let arr1 = user.data[0].photos.split(';');
						console.log(arr1);
						
						this.setState ({
							
							lastIndex : arr1.length-1,
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
            <section className="slider" onMouseOver={this.stopAutoPlay} onMouseOut={this.autoPlay}>
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
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
              
            ]
        };
    }
componentWillMount() {

		fetch(`/api.php?mode=news&id=${id}`)
			.then((data) =>{
				return data.json();})				
					.then((user) => {
						let arr1 = user.data[0].photos.split(';');
						console.log(arr1);
						
						this.setState ({
							items : arr1.map(function(i){ return {image : `${i}`}}),
							lastIndex : arr1.length-1,
						});					
						})
							.catch((err) => {});
  
    }
    render() {
        const SlideSettings = {
            count: 1,
            autoPlay: true,
            timeToSlide: 3500,
            showDots: true,
            pauseOnMouseOver: true,
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

        return (
            <Slider {...SlideSettings}>
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

// render(<App />, document.getElementById('slider_news'));
export default App;

// render(<App />, document.getElementById('root'));

