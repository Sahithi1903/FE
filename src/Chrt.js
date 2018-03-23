import React, { Component } from 'react';
import Login from './Login.js';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import S12 from './S12.js';
import {LineChart} from 'react-easy-chart';

class Chrt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey2:[],
            arrName:[],
            arrVisitors:[],
            arrFee:[]


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
        for (var i = 0;i<survey2.length; i++) {
            this.state.arrName.push(survey2[i].name);
            this.state.arrVisitors.push(survey2[i].visitors);
            this.state.arrFee.push(survey2[i].fee);
          }
        var surveyList = survey2.map(function (j, i) {
            console.log(j);
            var sTname = j.name; 
            var sVisitors = j.visitors; 
            var sFee = j.fee;  
            
            return (
                
                    
                <div>
                    <LineChart
                    xType={'text'}
                    axes
                    width={350}
                    height={250}
                    interpolate={'cardinal'}
                    data={[
                        [
                            { x: sTname, y: sVisitors }
                        ], [
                            { x: sTname, y: sFee },
                            
                        ]
                    ]}
                />

                </div>
                
            );
        });
        return (

            <div>
                <LineChart
                    xType={'text'}
                    axes
                    width={350}
                    height={250}
                    interpolate={'cardinal'}
                    data={[
                        [
                        
                            this.state.survey2.map(function(j,i){
                                { x: j.name; y: j.visitors}
                            })
                        ], [
                            this.state.survey2.map(function(j,i){
                                { x: j.name;y: j.visitors}
                            })
                        ]
                    ]}
                />
                
            </div>



        );
    }
}


export default Chrt;