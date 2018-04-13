import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css';
import ReactHoverObserver from 'react-hover-observer';
let test = window.screen.height;
const LEFT = 'left';
const RIGHT = 'right';


// Just a common utility function to get the display name of a component
// so we can make the React developer tools more useful.
function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component'
}



/*
	Just a separate component for the left and right arrow buttons

	isRight - bool - true if this is the right arrow (default: false)
	slide - function - the callback to call when this control is clicked
*/
function Control({ isRight = false, slide }) {
    let controlClass = 'slider-2__control';

    if (isRight) controlClass += ` ${controlClass}--right`;

    return <span
        className={controlClass}
        onClick={slide}
    >{isRight ? '>' : '<'}


    </span>
}



/*
	Just a separate component for the element that actually animates
	and brings the images with it.

	images - string[] - the list of image urls (`src` attributes) to render
	slideDirection - string - optional - if the slider is currently in a sliding state,
		pass the direction that corresponds to the CSS class that handles the animation.
*/
function Shuttle({ images = [], title = [], text = [], button = [], slideDirection, slideDirection2 }) {
    let shuttleClass = 'slider-2__shuttle';


    // We'll make different CSS classes for every possible animation direction.
    // Those'll look like "slider__shuttle--<direction here>"
    if (slideDirection) shuttleClass += ` ${shuttleClass}--${slideDirection}`;
    if (slideDirection2) shuttleClass += ` ${shuttleClass}__${slideDirection2}`;

    // Render the list of images.
    // Pseudo-prepend the last image and pseudo-append the first image to the list.
    // This allows lists of length 1 (go on and try removing all but one image from our data source).
    // Also remember to give the mapped-over <img> tags `key` properties!
    return (
        <div id="slider-2_test">
        <div id="slider-2_container">
            <div className={shuttleClass} id="slider-2_img_cont">
                {
                    images.map((src, index) =>
                        <div id={"slider-2_img_"+[index]} key={"slider-2_img_" + [index]} className="slider_img_class_2" style={{backgroundImage: "url(" + src + ")", height:(test/4) + 'px'}}>
                        </div>
                    )
                }

            </div>
            <div className="slider-2__" src={images[images.length - 1]}>
                <div id="slider-2_text_cont" className={shuttleClass}>
                    <div id="slider-2_text_cont_container">

                        {   /* title */
                            title.map((title, index) =>
                                <div key={"slider-2_title_" + [index]} id={"slider-2_title_"+[index]}  >
                                    <aside>{title} </aside>
                                </div>
                            )
                        }


                        {     /* Text */
                            text.map((text, index) =>
                                <div key={"slide-2_text_" + [index]} id={"slide-2_text_"+[index]}  >
                                    <aside>{text} </aside>
                                </div>
                            )
                        }


                        {    /* Button */
                            button.map((button, index) =>
                                <div id="slider-2_button_correct" key={"slider-2_button_correct_" + [index]}>
                                    <a href={button} key={"slide-2_but_" + [index]}>
                                        <div key={"slide-2_button_" + [index]} id={"slide-2_button_"+[index]} >
                                            <u>Читать далее...</u>
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


/*
	A generic Slider component.

	images - string[] - the list of image urls (`src` attributes) to render
*/
class Slider extends Component {
    constructor(props) {
        super(props);

        let { images } = props ;
        let { text } = props ;
        let { button } = props;
        let { title } = props;

        // Bind and partially apply our `slide` method.
        this.slideLeft = this.slide.bind(this, LEFT);
        this.slideRight = this.slide.bind(this, RIGHT);

        /*    setInterval(this.slide.bind(this, RIGHT), 4000);      */





        /*
            Set up our state.

            Create a clone of the images prop for our state so we can mess with it freely
            (this isn't necessary in our case, 'cause I did everything right,
            but it's good practice to avoid mutation side effects)

            slideDirection will be used both to:
                - track whether we're currently in an animating state
                - track which way we're currently animating (left or right)
        */
        this.state = {
            images: [ ...images ],
            text: [ ...text],
            title: [ ...title],
            button: [ ...button],
            slideDirection: '',
            slideDirection2: '',
        }
    }


    /*
        Just to be weirdly safe, clear our animation timeout if the component is
        unmounted during animation.
    */
    componentWillUnmount() {
        clearTimeout(this.timeoutId)
    }
	
	componentDidMount() {
		fetch(`/api.php?mode=slaider_news`)
			.then((data) =>{
				return data.json();})				
					.then((user) => {
						let arr = user.data.map(function(i){return i});
						console.log(arr);
						this.setState ({
						title : arr.map(function(i){return i.name}),
						text : arr.map(function(i){return i.description}),
						images : arr.map(function(i){return i.photos}),
						// date : arr.map(function(i){ let  k =  i.date.split (' '); return k[0]}),
						// month : arr.map(function(i){ let  k =  i.date.split (' '); return k[1]}),
						button : arr.map(function(i){return `/newpage.html?id=${i.id_news}`}),});

						// console.log(text);
						// console.log(description);
						// console.log(images);
						// console.log(date);
						// console.log(id_slider1);
						// console.log(response.status);
						
						})
							.catch((err) => {});
  
    }


    /*
        Start the slider animating.
        This just changes the state of the slider and sets up a timeout that'll undo that state change.


        slideDirection - string - one of 'left', 'right'
    */
    slide(slideDirection) {

        // Cancel any clicks that occur while we're in an animating state.
        if (this.state.slideDirection) return;

        // Set the new state! This'll trigger a re-render that'll give our Shuttle
        // component a new CSS class with the current slideDirection.
        this.setState({
            slideDirection
        });

        // Set up the code that'll run when the animation is over and reset our state to normal
        this.timeoutId = setTimeout(
            this.unslide.bind(this, slideDirection),
            1000
        )
    }

    slide2(slideDirection2) {

        // Cancel any clicks that occur while we're in an animating state.
        if (this.state.slideDirection2) return;

        // Set the new state! This'll trigger a re-render that'll give our Shuttle
        // component a new CSS class with the current slideDirection.
        this.setState({
            slideDirection2
        });

        // Set up the code that'll run when the animation is over and reset our state to normal
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(
            this.unslide.bind(this, slideDirection2),
            4000
        );
    }


    /*
        Set the slider's state back to normal when we're done animating.
        Also update the images list with the new image order
    */
    unslide(slideDirection) {
        delete this.timeoutId;

        this.setState(({ images, text, title, button}) => ({

            // if we went left, put the last image first
            // if we went right, put the first image last
            // This'll make sure that the first image in the list is the one shown
            // by our Shuttle component when its margin-left is reset to -100%
            images: slideDirection === LEFT
                ? [ ...images.slice(-1), ...images.slice(0, -1) ]
                : [ ...images.slice(1), images[0] ],

            text: slideDirection === LEFT
                ? [ ...text.slice(-1), ...text.slice(0, -1) ]
                : [ ...text.slice(1), text[0] ],

            title: slideDirection === LEFT
                ? [ ...title.slice(-1), ...title.slice(0, -1) ]
                : [ ...title.slice(1), title[0] ],

            button: slideDirection === LEFT
                ? [ ...button.slice(-1), ...button.slice(0, -1) ]
                : [ ...button.slice(1), button[0] ],

            // we're not animating anymore; open up the floor for new animation requests
            // and reset the position of the Shuttle component
            slideDirection: '',
            slideDirection2: ''
        }))
    }


    render() {
        let { images, text, title, button, slideDirection, slideDirection2 } = this.state;


        
        let timerId;
        let Slider_auto = ({ isHovering = false }) => (
            <div id="Slider-2_hover_null">
                {
                    isHovering ?
                        (
                            clearTimeout(timerId))
                        : timerId = setTimeout(this.slide2.bind(this, RIGHT)
                        , 4000)
                }
            </div>
        );

        return (
            <div className="cont_slider-2">
                <ReactHoverObserver className="slider-2_auto" >
                    <Slider_auto />
                    <Control slide={this.slideLeft} />
                        <div className="slider-2">
                            <Shuttle {...{ images, text, title, button, slideDirection, slideDirection2 }} />
                        </div>
                    <Control slide={this.slideRight} isRight={true} />
                </ReactHoverObserver>
            </div>
        )
    }
}


/*
	This is totally unnecessary, but informative:
	This is a HOC (Higher-Order Component) that'll give the passed component a
	default data source via the `images` prop.
*/
function withTestImages(WrappedComponent) {
    let images = [
        'http://www.barco.com/images/productImages/nigel-lindsay-as-shrek-with-fairy-tale-characters_767f5ffd_L___Selected.jpg',
        'http://www.anypics.ru/pic/201602/1024x768/anypics.ru-93129.jpg',
        'https://www.tomswallpapers.com/pic/201503/1024x768/tomswallpapers.com-26765.jpg',
        'http://www.ruseducation.in/img/smolesnk%20city.jpg'
    ];


    let title = [
        'Заголовок новости №1',
        'Заголовок новости №2',
        'Заголовок новости №3',
        'Заголовок новости №4',
    ];

    let text = [
        'Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.\n' +
        "\n" +
        'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.',

        'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.\n' +
        'Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений.',

        'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.\n' +
        'Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль. ',

        'Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.\n' +
        'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров.',
    ];


    let button = [
        'https://www.yandex.ru/',
        'https://www.google.ru/',
        'https://yandex.ru/pogoda/penza?from=serp_title',
        'https://www.gismeteo.ru/',
    ];

    // Return a new, wrapper component
    // Pass any props it receives on to the WrappedComponent
    // This makes this wrapper component invisible to consumers.
    // Passing {...props} last allows consumers to override the `images` prop.
    let Wrapper = props => <WrappedComponent images={images} title={title} text={text} button={button} {...props} />;

    // A convention. The name of a wrapper component returned from a HOC is
    // "<capitalized name of HOC>(<name of wrapped component>)"
    // This is for your own sake when using the React developer tools
    // (which you'd better be)
    Wrapper.displayName = `WithTestImages(${getDisplayName(WrappedComponent)})`;

    return Wrapper
}


// Create the data-wrapped component that we'll actually use for our test.
const TestSlider = withTestImages(Slider);


// Get this party started.
// Uncomment the images prop to override the default images provided by our test
// images data source.
render(
    <TestSlider />,
    document.getElementById('root_2')
);


/* -------------------------------------------------------- */

