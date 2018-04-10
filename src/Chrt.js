import React, { Component } from 'react';
import Login from './Login.js';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import S12 from './S12.js';
import { LineChart } from 'react-easy-chart';
import {BarChart} from 'react-easy-chart';
import {PieChart} from 'react-easy-chart';

class Chrt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey2: [],
            arrName: [],
            arrVisitors: [],
            arrFee: []


        }




    }

    componentDidMount() {
        var Login = require('./Login.js');
        var accessToken = localStorage.getItem("accessToken");
        fetch('http://10.10.200.39:9000/forms/all',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": 'Bearer' + accessToken,
                },
            })
            .then(response => response.json())
            .then((survey2) => this.setState({ survey2: survey2 }));

    }



    render() {




        var survey2 = this.state.survey2;
        var arr;
        console.log(survey2);
        for (var i = 0; i < survey2.length; i++) {
            this.state.arrName.push(survey2[i].name);
            this.state.arrVisitors.push(survey2[i].visitors);
            this.state.arrFee.push(survey2[i].fee);
        }
        
        return (

            <div className="chartBox">
            <h2><font color="black">Interpolation Chart between Number of Visitors and Entry Fee for temples</font></h2><br/>
            <font color="black">x: Temple name<br/>
            y:Number of visitors and Entry Fee</font>

                <LineChart
                    xType={'text'}
                    axes
                    
                    width={800}
                    height={500}
                    dataPoints
                    interpolate={'cardinal'}
                    data={[
                        [

                            
                            { x: this.state.arrName[0], y: this.state.arrVisitors[0] },
                            { x: this.state.arrName[1], y: this.state.arrVisitors[1] },
                            { x: this.state.arrName[2], y: this.state.arrVisitors[2] },
                            { x: this.state.arrName[3], y: this.state.arrVisitors[3] },
                            { x: this.state.arrName[4], y: this.state.arrVisitors[4] },
                            { x: this.state.arrName[5], y: this.state.arrVisitors[5] },
                            { x: this.state.arrName[6], y: this.state.arrVisitors[6] },
                            { x: this.state.arrName[7], y: this.state.arrVisitors[7] },
                            { x: this.state.arrName[8], y: this.state.arrVisitors[8] },
                            { x: this.state.arrName[9], y: this.state.arrVisitors[9] },
                            { x: this.state.arrName[10], y: this.state.arrVisitors[10] },
                            { x: this.state.arrName[11], y: this.state.arrVisitors[11] },
                            { x: this.state.arrName[12], y: this.state.arrVisitors[12] },
                            { x: this.state.arrName[13], y: this.state.arrVisitors[13] },
                            { x: this.state.arrName[14], y: this.state.arrVisitors[14] },
                            { x: this.state.arrName[15], y: this.state.arrVisitors[15] },
                            { x: this.state.arrName[16], y: this.state.arrVisitors[16] },
                        ],[
                        
                            { x: this.state.arrName[0], y: 300 },
                            { x: this.state.arrName[1], y: 400 },
                            { x: this.state.arrName[2], y: 500 },
                            { x: this.state.arrName[3], y: 350 },
                            { x: this.state.arrName[4], y: 550 },
                            { x: this.state.arrName[5], y: 450 },
                            { x: this.state.arrName[6], y: 600 },
                            { x: this.state.arrName[7], y: 650 },
                            { x: this.state.arrName[8], y: this.state.arrFee[8] }
                            
                            
                            
                          ]
                    ]}
                />
               

            </div>



        );
    }
}


export default Chrt;