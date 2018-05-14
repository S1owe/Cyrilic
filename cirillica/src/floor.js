import React, { Component } from 'react';
import './body.css';
import './booking.css';
import './newpage.css';
import './floor.css';



class Floor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chairsCount: 15,
            lineCount: 7,
            buyed: [5,55, 70, 97, 91],
            changed: [],
            empty: [1,15,75,89,90],
            scene: [0],
            price1: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29, 30],
            price2: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
            price3: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
            price4: [76,77,78,79,80,81,82,83,84,85,86,87,88],
            price5: [91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            paid: [],
            cat1: 100,
            cat2: 150,
            cat3: 200,
            cat4: 250,
            cat5: 300,
            price:0,
            data: "04.05.2018"
        }

    }
    Prices_plus = () => {
    let costs=0;
        /*for (let i=0;i<this.state.changed.length;i++){
            if (this.state.price1.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price + this.state.cat1})
            else
            if (this.state.price2.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price +  this.state.cat2})
            else
            if (this.state.price3.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price +  this.state.cat3})
            else
            if (this.state.price4.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price + this.state.cat4})
            else
            if (this.state.price5.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price + this.state.cat5})}*/
        cost = this.state.changed.map(function(i){
                costs = costs + i.cost;

        });
        return costs;

    };
    Prices_minus = () => {
        console.log(this.state.price);
        for (let i=0;i<this.state.changed.length;i++){
            if (this.state.price1.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price - this.state.cat1})
            else
            if (this.state.price2.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price -  this.state.cat2})
            else
            if (this.state.price3.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price -  this.state.cat3})
            else
            if (this.state.price4.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price - this.state.cat4})
            else
            if (this.state.price5.indexOf(this.state.changed[i])!==-1)
                this.setState({price : this.state.price - this.state.cat5})
        }
    };

    changeChair = (chairId) => {
        console.log('Выбран стул ' + (chairId));

            if (this.state.buyed.indexOf(chairId) === -1) {
                if (this.state.empty.indexOf(chairId) === -1) {
                    if (this.state.changed.indexOf(chairId) === -1) {
                        if (this.state.scene.indexOf(chairId) === -1) {
                            if(this.state.changed.length<10) {

                                this.setState({
                                    changed: [...this.state.changed, chairId],
                                    price: this.Prices_plus()
                                });
                        }else {alert('Нельзя купить больше 10 мест')}}
                    } else {
                        this.Prices_minus();
                        this.setState({
                            changed: this.state.changed.filter((index) => index !== chairId)
                        })
                    }
                } else {
                    this.setState({
                        changed: this.state.changed.filter((index) => index !== chairId)
                    })
                }
            } else {
                alert('Место куплено');
            }

    };

    dataDay = () => {
        let date1 = this.state.data;
        date1 = date1.split('.');
        let fullDate = new Date(date1[2], date1[1] - 1, date1[0], 0, 0, 0, 0)
        let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        let daysId = fullDate.getDay();
        return days[daysId];
    }

    buyChairs = () => {
        this.setState({
            length1: this.state.buyed.length,
            buyed: [...this.state.buyed,...this.state.changed],
            length2: this.state.changed.length,
        })
    };

    cancelBuyChairs = () => {
        this.setState({
            buyed : this.state.buyed.filter((i) => this.state.changed.indexOf(i)===-1),
            changed:[],
            price: 0
        })
    };

    payChair = () => {
        this.setState({
            paid : [...this.state.paid,...this.state.changed],
            changed:[],
        })

    };



    componentDidMount() {
        this.setState({
            length1: this.state.buyed.length,
        })
    }


    render() {
        let chairs = [];
        for (let i = 0; i < this.state.chairsCount * this.state.lineCount+1; i++) {
            chairs.push({
                isBuyed: this.state.buyed.indexOf(i) !== -1,
                isChanged: this.state.changed.indexOf(i) !== -1,
                isEmpty: this.state.empty.indexOf(i) !== -1,
                isScene: this.state.scene.indexOf(i) !== -1,
                isPrice1: this.state.price1.indexOf(i) !== -1,
                isPrice2: this.state.price2.indexOf(i) !== -1,
                isPrice3: this.state.price3.indexOf(i) !== -1,
                isPrice4: this.state.price4.indexOf(i) !== -1,
                isPrice5: this.state.price5.indexOf(i) !== -1,
                isPaid: this.state.paid.indexOf(i) !== -1,
                cost: i < 31 ? 200 : i < 61 ? 250 : i < 76 ? 300 : i < 89 ? 350 : 400
            });

        }
        return (
            <div className="floor2">
                <div className="floor3">

                    <div id="booking_data">
                        <div id="booking_data1">{this.state.data}</div>
                        <div id="booking_data2">, {this.dataDay()}</div>
                    </div>

                    <div id="place">
                        Выберите место в зале
                    </div>


                    <div className="floor">
                        {

                            chairs.map((chair, index) => {
                                    let statusClass =  chair.isChanged ? 'changed': chair.isBuyed ? 'buyed' : chair.isEmpty ? 'empty'
                                        : chair.isScene ? 'scene' :  chair.isPrice1 ? 'price1' : chair.isPrice2 ? 'price2'
                                            : chair.isPrice3 ? 'price3' : chair.isPrice4 ? 'price4' :  'price5';
                                    return <div key={index} className={`chair ${statusClass}`} onClick={() => this.changeChair(index)}/>
                                }
                            )
                        }
                    </div>
                    <button className="Reserve_Delete" onClick={this.buyChairs}>Забронировать</button>
                    <button className="Reserve_Delete" onClick={this.cancelBuyChairs}>Удалить</button>
                    <button className="Reserve_Delete" onClick={this.payChair}>Оплатить</button>

                </div>
                <div id = "floor6">Выбрано мест: {this.state.changed.length}</div>
                <div id = "floor4">
                   {this.state.changed.map(function(i) {
                    let Row = (i) =>{
                        if (Math.floor(i / 15) + 1 > 1 )
                            if (Math.floor(i % 15) === 0 )
                                return(Math.floor(i / 15));
                            else return(Math.floor(i / 15) + 1);
                        else return(1)
                    };
                    let
                        Place =(i) => {
                            if (Math.floor(i / 15) + 1 > 1 )
                                if (Math.floor(i % 15) === 0 )
                                    return(15);
                                else return(Math.floor((i % 15)));
                            else return(Math.floor((i % 15) - 1))
                        };
                    return  (`${Row(i)} ряд ${Place(i)} место`)})}<br/>
                </div>
                <div id = "floor6">Выбрано мест: {this.state.changed.length}</div>
                <div id = "floor5">Общая сумма: {this.state.price}</div>
            </div>
        );
    }
}

export default Floor;
