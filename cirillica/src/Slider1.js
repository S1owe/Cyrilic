import React, {Component} from 'react'
import {render} from 'react-dom'

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
    let controlClass = 'slider__control';

    if (isRight) controlClass += ` ${controlClass}--right`;

    return <span className={controlClass} onClick={slide}>
        
        {isRight ? '>' : '<'}

        </span>
}


/*
	Just a separate component for the element that actually animates
	and brings the images with it.

	images - string[] - the list of image urls (`src` attributes) to render
	slideDirection - string - optional - if the slider is currently in a sliding state,
		pass the direction that corresponds to the CSS class that handles the animation.
*/



function Shuttle({ images = [], month = [], text = [], id_slider1 = [], date = [], slideDirection, slideDirection2 }) {
    let shuttleClass = 'slider__shuttle';


    // We'll make different CSS classes for every possible animation direction.
    // Those'll look like "slider__shuttle--<direction here>"
    if (slideDirection) shuttleClass += ` ${shuttleClass}--${slideDirection}`;
    if (slideDirection2) shuttleClass += ` ${shuttleClass}__${slideDirection2}`;

    // Render the list of images.
    // Pseudo-prepend the last image and pseudo-append the first image to the list.
    // This allows lists of length 1 (go on and try removing all but one image from our data source).
    // Also remember to give the mapped-over <img> tags `key` properties!
    return (
        <div id="slider_container">
            <div className={shuttleClass} id="slider_img_cont">
                {
                    images.map((src, index) =>
                        <div id={"slider_img_"+[index]} className="slider_img_class" key={"slider_img_" + [index]} style={{backgroundImage: "url(" + src + ")", height:(test/3) + 'px'}}>
                            
                        </div>
                    )
                }

            </div>
            <div className="slider__" src={images[images.length - 1]}>
                <div id="slider_text_cont" className={shuttleClass}>
                    <div id="slider_text_cont_container">

                        {   /* Date */
                            date.map((date, index) =>
                                <div key={"slider_date_" + [index]} id={"slider_date_"+[index]}  >
                                    <aside>{date} </aside>
                                </div>
                            )
                        }

                        {   /* Month */
                            month.map((month, index) =>
                                <div key={"slider_month_" + [index]} id={"slider_month_"+[index]}  >
                                    <aside>{month} </aside>
                                </div>
                            )
                        }


                        {     /* Text */
                            text.map((text, index) =>
                                <div key={"slide_text_" + [index]} id={"slide_text_"+[index]}  >
                                    <aside>{text} </aside>
                                </div>
                            )
                        }


                        {    /* Button */
                            id_slider1.map((id_slider1, index) =>
                                <div className="slide_but_width" key={"slide_but_width_" + [index]}>
                                <a href={`/booking.html?id=${id_slider1}`} key={"slide_but_" + [index]}>
                                    <div key={"slide_button_" + [index]} id={"slide_button_"+[index]} >
                                        <u>Подробнее</u>
                                    </div>
                                </a>
                                </div>
                            )
                        }

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
        let { date } = props;
        let { id_slider1 } = props;
        let { month } = props;

        // Bind and partially apply our `slide` method.
        this.slideLeft = this.slide.bind(this, LEFT);
        this.slideRight = this.slide.bind(this, RIGHT);

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
            month: [ ...month],
            date: [ ...date],
            id_slider1: [ ...id_slider1],
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
		fetch(`/api.php?mode=slaider_session`)
			.then((data) =>{
				return data.json();})				
					.then((user) => {
						let arr = user.data.map(function(i){return i});
						console.log(arr);
						this.setState ({
						text : arr.map(function(i){return i.name}),
						description : arr.map(function(i){return i.description}),
						images : arr.map(function(i){return i.photo}),
						date : arr.map(function(i){ let  k =  i.date.split (' '); return k[0]}),
						month : arr.map(function(i){ let  k =  i.date.split (' '); return k[1]}),
						id_slider1 : arr.map(function(i){return i.id_session}),});

						console.log(text);
						console.log(description);
						console.log(images);
						console.log(date);
						console.log(id_slider1);
						console.log(response.status);
						
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
        );
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
            3000
        );
    }

    /*
        Set the slider's state back to normal when we're done animating.
        Also update the images list with the new image order
    */

    unslide(slideDirection) {

        this.setState(({ images, text, month, date, id_slider1 }) => ({


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

            month: slideDirection === LEFT
                ? [ ...month.slice(-1), ...month.slice(0, -1) ]
                : [ ...month.slice(1), month[0] ],

            date: slideDirection === LEFT
                ? [ ...date.slice(-1), ...date.slice(0, -1) ]
                : [ ...date.slice(1), date[0] ],

            id_slider1: slideDirection === LEFT
                ? [ ...id_slider1.slice(-1), ...id_slider1.slice(0, -1) ]
                : [ ...id_slider1.slice(1), id_slider1[0] ],


            // we're not animating anymore; open up the floor for new animation requests
            // and reset the position of the Shuttle component
            slideDirection: '',
            slideDirection2: ''
        }))
    }


    render() {
        let { images, text, date, month, id_slider1, slideDirection, slideDirection2 } = this.state;

     /*   let count = 0;       */
        /*count = count + 1;
        alert(count);

        count == 1 ? alert('45') : '';  */
       /*
        this.timeoutId = this.slide.bind(this, RIGHT);

        let timerId = this.timeoutId;

        let Slider_auto = ({ isHovering = false }) => (
                <div id="Slider_hover_null">
                {
                    isHovering ?
                    clearInterval()
                    : setInterval(
                                r()
                        ,1000)
                }    
                </div>
        );

        function r() {
            count += 1;
           if (count % 10 === 5) return alert('asdsad')
        }
           */
        let timerId;
        let Slider_auto = ({ isHovering = false }) => (
            <div id="Slider_hover_null">
                {
                    isHovering ?
                        (
                            clearTimeout(timerId))
                        : timerId = setTimeout(this.slide2.bind(this, RIGHT)
                        , 3000)
                }
            </div>
        );

        return (
            <div className="slider">
                <ReactHoverObserver className="slider_auto" >
                    <Slider_auto />
                    <Control slide={this.slideLeft} />
                    <Shuttle {...{ images, text, date, month, id_slider1, slideDirection, slideDirection2 }} />
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

    ];

    let date = [

    ];

    let month = [

    ];

    let text = [

    ];


    let id_slider1 = [

    ];

    // Return a new, wrapper component
    // Pass any props it receives on to the WrappedComponent
    // This makes this wrapper component invisible to consumers.
    // Passing {...props} last allows consumers to override the `images` prop.
    let Wrapper = props => <WrappedComponent images={images} month={month} text={text} date={date} id_slider1={id_slider1} {...props} />;

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
    document.getElementById('root_1')
);



/* -------------------------------------------------------- */

