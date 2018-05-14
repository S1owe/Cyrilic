import './body.css';
import './booking.css';
import './newpage.css';
import './floor.css';
import Floor from './floor.js';
import React, {Component} from 'react';
import {render} from 'react-dom';

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


class Booking extends Component {
    constructor(props) {
        super(props);

    };

    render() {

        return (
            <div>
                <div class="body">
                    <div id="body_booking">
                        <div id="booking_left">
                            <div id = "time">20:00</div>
                            <div id="name">"Билли Бадд"</div>
                            <div id = "hall">Малый зал пензенского драмтеатра</div>
                            <div id="prices">
                                <div className = "category">
                                    <div className="chair price1"/>
                                    <div className="price">200 руб</div>
                                </div>
                                <div className = "category">
                                    <div className="chair price2"/>
                                    <div className="price">250 руб</div>
                                </div>
                                <div className = "category">
                                    <div className="chair price3"/>
                                    <div className="price">300 руб</div>
                                </div>
                                <div className= "category">
                                    <div className="chair price4"/>
                                    <div className="price">350 руб</div>
                                </div>
                                <div className = "category">
                                    <div className="chair price5"/>
                                    <div className="price">400 руб</div>
                                </div>
                                <div className = "category">
                                    <div className="chair buyed"/>
                                    <div className="price">Купленные места</div>
                                </div>
                                <div className = "category">
                                    <div className="chair changed"/>
                                    <div className="price">Выбранные вами  места</div>
                                </div>
                            </div>
                        </div>
                        <div id="booking_center">
                            <div id="floor1">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="buttons">
                    <a class="backnew" href="index.html"><img class="back"
                                                              src='./img/no-translate-detected_318-140060.jpg'
                                                              alt="back"/> Назад</a>
                    <a class="closenew" href="index.html"><img class="back"
                                                              src='./img/no-translate-detected_318-140070.jpg'
                                                              alt="close"/></a>
                </div>

            </div>
        );
    }
};



export default Booking;




