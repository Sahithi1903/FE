import React, { Component } from 'react';
import Login from './Login.js';
import Mma from './Mma.js';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import S12 from './S12.js';

class SurveyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedIn: "false",
            json: [],
            
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value,
        });

        var Login = require('./Login.js');
        var accessToken = localStorage.getItem("accessToken");
        
        fetch("http://10.10.200.39:9000/users/me",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json",
                    "Authorization": 'Bearer' + accessToken,

                },

            }).then(result1 => result1.json())
            .then(function (result1) {

                console.log(result1);
                ReactDOM.render([result1.email], document.getElementById('mine'));
                ReactDOM.render([result1.username], document.getElementById('mine2'));
                ReactDOM.render([result1.role], document.getElementById('mine3'));
                
                
                
                {/*for (var i = 1; i < result1.length; i++) {
                    console.log(result1[i].description);
                    ReactDOM.render(res,document.getElementById('mine'));
                    res.push(result1[i].description);
                    temp.push(result1[i].id);
                }
                console.log(res);
                console.log(temp);
                localStorage.setItem("res",res);
                res=localStorage.getItem("res");
                module.exports={data:"res"};
        
            <NavLink to="/S12"></NavLink>*/}
                
                
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    render() {
        return (
            <HashRouter>
            <div className="loginBox">
                <h2> </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" className="" value="Profile" />
                   
                </form>
                <b>Username:</b><div id="mine2"></div><br/>
                <b>Email Id:</b><div id="mine"></div><br/>
                <b>Role:</b><div id="mine3"></div><br/>

                <a href=""><NavLink to="/Mma">Make me Admin</NavLink></a><br></br>
                <div className="content">
            <Route path="/Mma" component={Mma}/>
            </div>

            </div>
            </HashRouter>
            

        );
    }
}


export default SurveyList;