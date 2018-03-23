import React, { Component } from 'react';
import Login from './Login.js';
import LatLong from './LatLong.js';
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";

class Edform1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            timings: "",
            visitors: "",
            fee: "",
            reviews: "",
            latitude: "",
            longitude: "",
            survey_id:"",

            json: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleTemplenameChange = this.handleTemplenameChange.bind(this);
        this.handleTimingsChange = this.handleTimingsChange.bind(this);
        this.handleVisitorsChange = this.handleVisitorsChange.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
        this.handleFeeChange = this.handleFeeChange.bind(this);

    }
    handleSubmit(event) {


        event.preventDefault();
        this.setState({
            value: event.target.value,
        });
        var templenam = document.getElementById('templename1').value;
        var plac = document.getElementById('place1').value;
        var timing = document.getElementById('timings1').value;
        var visitor = document.getElementById('visitors1').value;
        var fee = document.getElementById('fee1').value;
        var reviews = document.getElementById('reviews').value;
        var latitud = document.getElementById('latitude1').value;
        var longitud = document.getElementById('longitude1').value;
        var Login = require('./Login.js');
        var survey_id=13;
        var accessToken = localStorage.getItem("accessToken");
        //var str=Login.data;
        //var accesstoken=JSON.stringify(str);
        console.log(Login.accessToken);




        var form1 = JSON.stringify({ survey_id: survey_id,name: templenam, address: plac, timings: timing, visitors: visitor, fee: fee, reviews: reviews, latitude: latitud, longitude: longitud });
        fetch("http://10.10.200.39:9000/forms",
            {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json",
                    "Authorization": 'Bearer' + accessToken,
                },

                body: form1,
            }).then(result => result.json())
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(form1);

    }
    handlePlaceChange(event) {
        this.setState({
            address: event.target.value,
        })
    }

    handleTemplenameChange(event) {
        this.setState({
            name: event.target.value,
        })
    }
    handleTimingsChange(event) {
        this.setState({
            timings: event.target.value,
        })
    }

    handleVisitorsChange(event) {
        this.setState({
            visitors: event.target.value,
        })
    }
    handleFeeChange(event) {
        this.setState({
            fee: event.target.value,
        })
    }
    handleLatitudeChange(event) {
        this.setState({
            latitude: event.target.value,
        })
    }
    handleLongitudeChange(event) {
        this.setState({
            longitude: event.target.value,
        })
    }
    handleReviewChange(event) {
        this.setState({
            reviews: event.target.value,
        })
    }



    render() {
        return (
            <HashRouter>
                <div>

                    <div className="container">
                        <form onSubmit={this.handleSubmit}>




                            <p><font color="black">Templename</font></p>
                            <input type="text"
                                id="templename1"
                                placeholder="Your temple name.."
                                onChange={this.handleTemplenameChange}
                                value={this.state.name} />


                            <p><font color="black">Address</font></p>
                            <input className=""
                                type="text" id="place1"
                                placeholder="Your place name.."
                                onChange={this.handlePlaceChange}
                                value={this.state.address} />


                            <p><font color="black">Timings</font></p>
                            <input type="text"
                                id="timings1"
                                placeholder="Your temple opening timings.."
                                onChange={this.handleTimingsChange}
                                value={this.state.timings} />

                            <p><font color="black">Number of Visitors Per Day</font></p>
                            <input type="text"
                                id="visitors1"
                                placeholder="Enter no.of visitors per day.."
                                onChange={this.handleVisitorsChange}
                                value={this.state.visitors} />

                            <p><font color="black">Review</font></p>
                            <input type="text"
                                id="reviews"
                                placeholder="Add any extra info.."
                                onChange={this.handleReviewChange}
                                value={this.state.review} />

                            <p><font color="black">Latitude</font></p>
                            <input type="text"
                                id="latitude1"
                                placeholder="Enter latitude"
                                onChange={this.handleLatitudeChange}
                                value={this.state.latitude} />

                            <p><font color="black">Longitude</font></p>
                            <input type="text"
                                id="longitude1"
                                placeholder="Enter longitude"
                                onChange={this.handleLongitudeChange}
                                value={this.state.longitude} />

                            
                            <div className="content">

                                
                                <Route path="/LatLong" component={LatLong} />
                            </div>

                            <p><font color="black">Entry Fee</font></p>
                            <input type="text"
                                id="fee1"
                                placeholder="Enter entryfee"
                                onChange={this.handleFeeChange}
                                value={this.state.fee} />




                            <input type="submit"
                                value="Submit"
                            />
                            <button><NavLink to="/Latlong">FindLatLong</NavLink></button><br></br>
                        </form>

                    </div>
                </div>
            </HashRouter>
        );

    }
}




export default Edform1;