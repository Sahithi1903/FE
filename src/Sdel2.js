import React, { Component } from 'react';
import Login from './Login.js';
import LatLong from './LatLong.js';
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";

class Sdel2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            

            json: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTemplenameChange = this.handleTemplenameChange.bind(this);
        

    }
    handleSubmit(event) {


        event.preventDefault();
        this.setState({
            value: event.target.value,
        });
        var templenam = document.getElementById('templename1').value;
        
        var Login = require('./Login.js');
        
        var accessToken = localStorage.getItem("accessToken");
        //var str=Login.data;
        //var accesstoken=JSON.stringify(str);
        console.log(Login.accessToken);




        var form1 = JSON.stringify({  name: templenam,});
        fetch("http://10.10.200.39:9000/forms",
            {

                method: "DELETE",
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

    handleTemplenameChange(event) {
        this.setState({
            name: event.target.value,
        })
    }
   




    render() {
        return (
            <HashRouter>
                <div className="surveyBox">

                    <div className="container">
                        <form onSubmit={this.handleSubmit}>




                            <p><font color="black">Feature Name</font></p>
                            <input type="text"
                                id="templename1"
                                placeholder="Your feature name.."
                                onChange={this.handleTemplenameChange}
                                value={this.state.name} />


                            


                            <input type="submit"
                                value="Delete"
                            />
                            <br></br>
                        </form>

                    </div>
                </div>
            </HashRouter>
        );

    }
}




export default Sdel2;