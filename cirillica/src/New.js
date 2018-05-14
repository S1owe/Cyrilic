import React, { Component } from 'react';
import './body.css';
import './newpage.css';
// import App from 'Slider_news';
// import {id} from './Slider1.js';

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
 // id = 1;
// let a;


// alert(id);

class New extends Component {
	constructor(props) {
	super(props);
	this.state = { 
	title : "",
	body : "",
	image : "",
	}
	};
	

	componentDidMount()
	{
		fetch(`/api.php?mode=news&id=${id}`)
			.then((data) =>{
				return data.json();})
					.then((user) => {
						this.setState({title : user.data[0].name, body : user.data[0].text, image : user.data[0].photos})})
							.catch((err) => {});
	}

	render() {
		
	return(
	<div>
      <div class="body">
			<div id="container">
				<div id="content">  
					<font face="Tahoma"> 
						<div id = "new_title">{this.state.title}</div>
						<div id = "root"/>
						<div id = "new_body">{this.state.body}</div> 
					</font>  
				</div> 
			</div>      
	  </div>
        <div id="buttons">
            <a className="backnew" href="index.html"><img className="back"
                                                          src='./img/no-translate-detected_318-140060.jpg'
                                                          alt="back"/> Назад</a>
            <a className="closenew" href="index.html"><img className="back"
                                                           src='../img/no-translate-detected_318-140070.jpg'
                                                           alt="close"/></a>
        </div>
	</div>
    );
  }
};

export default New;
