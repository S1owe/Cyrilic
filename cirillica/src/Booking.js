import React, { Component } from 'react';
import './body.css';
import './booking.css';
import './newpage.css';

// import App from 'Slider_news';
// import {id} from './Slider1.js';

// function parseUrl() {
	// if (!window.location.search) return;
	// const url = window.location.search.match(/\?(.+)/)[1].split('&');
	// let res = {};
	// url.forEach((entry) => {
		// res[entry.split('=')[0]] = entry.split('=')[1];
	// });
	// return res;
// }

// let id = parseUrl()['id'];
 // id = 1;
// let a;


// alert(id);

class Booking extends Component {
	constructor(props) {
	super(props);
	this.state = { 
	title : "qwrt",
	body : "",
	image : "",
	}
	};
	

	// componentDidMount()
	// {
		// fetch(`/api.php?mode=news&id=${id}`)
			// .then((data) =>{
				// return data.json();})
					// .then((user) => {
						// this.setState({title : user.data[0].name, body : user.data[0].text, image : user.data[0].photos})})
							// .catch((err) => {});
	// }

	render() {
		
	return(
	<div>
      <div class="body">
			<div id = "head">
			</div>
			<div id="container">
				<div id="content">  
					<font face="Tahoma"> 
						<div ><h1>{this.state.title}</h1></div>

						<div>{this.state.body}</div> 
					</font>  
				</div> 
			</div>      
	  </div>
		<div id = "buttons"> 
			<a  class="backnew" href = "index.html"><img class="back"src = './src/img/no-translate-detected_318-140060.jpg' alt = "back"/> Назад</a> 
			<a  class="closenew" href = "yandex.ru"><img class="back"src = '../src/img/no-translate-detected_318-140070.jpg' alt = "close"/></a> 
		</div> 
	</div>
    );
  }
};

export default Booking;
