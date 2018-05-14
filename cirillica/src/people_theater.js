import React, {Component} from 'react'
import {render} from 'react-dom'
import './index_people_theater.css';

console.clear();



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "1",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                },{
                    id: "2",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://cdn3.img.ria.ru/images/149093/88/1490938858.jpg"
                },
                {
                    id: "3",
                    name: "Дмитрий",
                    secondname: "Данилин",
                    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beach-sunset-beautiful-photos.jpg"
                }
            ],

            but_state1: true,
            but_state2: false,
            but_state3: false,
            but_state4: false
        };




        this.button_oll = this.button_oll.bind(this);
        this.button_leadership = this.button_leadership.bind(this);
        this.button_actor = this.button_actor.bind(this);
        this.button_soloist = this.button_soloist.bind(this);
    }

    button_oll() {
        // check if box is currently opened
        this.setState({
            but_state1: true,
            but_state2: false,
            but_state3: false,
            but_state4: false
        });
    }

    button_leadership() {
        // check if box is currently opened
        this.setState({
            but_state1: false,
            but_state2: true,
            but_state3: false,
            but_state4: false
        });
    }

    button_actor() {
        // check if box is currently opened
        this.setState({
            but_state1: false,
            but_state2: false,
            but_state3: true,
            but_state4: false
        });
    }

    button_soloist() {
        // check if box is currently opened
        this.setState({
            but_state1: false,
            but_state2: false,
            but_state3: false,
            but_state4: true
        });
    }
    componentDidMount()
    {
        fetch(`/api.php?mode=people`)
            .then((data) =>{
                return data.json();})
            .then((user) => {
                let arr1 = user.data[1].map(function (i) {i[2] = "1";
                    return i
                });

                let arr2 = user.data[2].map(function (i) {i[2] = "2";
                    return i
                });

                let arr3 = user.data[3].map(function (i) {i[2] = "3";
                    return i
                });

                let arr4 = [...arr1,...arr2,...arr3];

                this.setState({
                    items: arr4.map(function(i){ let k=i[0].split(" "); return {id : i[2], image: i[1], name: k[0], secondname: k[1] }}),
                })
           })
            .catch((err) => {});
    }
    render() {

        let { but_state1 } = this.state;
        let { but_state2 } = this.state;
        let { but_state3 } = this.state;
        let { but_state4 } = this.state;

        return (
            <div id="container">

            <div id="content-menu">
                <div id="content-menu-container">
                    <div className="second_menu"><a onClick={this.button_oll}>Все</a></div>
                    <div className="second_menu"><a onClick={this.button_leadership}>Руководители</a></div>
                    <div className="second_menu"><a onClick={this.button_actor}>Актеры</a></div>
                    <div className="second_menu"><a onClick={this.button_soloist}>Солисты</a></div>
                </div>
            </div>

                { but_state1 && !but_state2 && !but_state3 && !but_state4 &&
                (
                <div id="cont_people">
        {
            this.state.items.map((item, i) => {
                    return (
                        <div key={i} className="people_container">
                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                            <div className="people_name">
                                <a>{item.name}</a>
                            </div>
                            <div className="people_secondname">
                                <a>{item.secondname}</a>
                            </div>
                        </div>
                    );
            })
        }
                </div>
                )}

                { !but_state1 && but_state2 && !but_state3 && !but_state4 &&
                (
                    <div id="cont_people">
                        {
                            this.state.items.map((item, i) => {
                                if (item.id === '1') {
                                    return (
                                        <div key={i} className="people_container">
                                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                            <div className="people_name">
                                                <a>{item.name}</a>
                                            </div>
                                            <div className="people_secondname">
                                                <a>{item.secondname}</a>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                )}

                { !but_state1 && !but_state2 && but_state3 && !but_state4 &&
                (
                    <div id="cont_people">
                        {
                            this.state.items.map((item, i) => {
                                if (item.id === '2') {
                                    return (
                                        <div key={i} className="people_container">
                                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                            <div className="people_name">
                                                <a>{item.name}</a>
                                            </div>
                                            <div className="people_secondname">
                                                <a>{item.secondname}</a>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                )}

                { !but_state1 && !but_state2 && !but_state3 && but_state4 &&
                (
                    <div id="cont_people">
                        {
                            this.state.items.map((item, i) => {
                                if (item.id === '3') {
                                    return (
                                        <div key={i} className="people_container">
                                            <div className="image" style={{backgroundImage: "url(" + item.image + ")"}} />
                                            <div className="people_name">
                                                <a>{item.name}</a>
                                            </div>
                                            <div className="people_secondname">
                                                <a>{item.secondname}</a>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                )}

            </div>


        );
    }
}

render(<App />, document.getElementById('people_theater'));

