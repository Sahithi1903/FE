import React, { Component } from 'react';
import Login from './Login.js';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import S12 from './S12.js';

class Mma extends Component {
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
        
        fetch("http://10.10.200.39:9000/updaterole",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json",
                    "Authorization": 'Bearer' + accessToken,

                },

            });


    }


    render() {
        return (
            <HashRouter>
            <div className="loginBox">
                <h2> </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" className="" value="Make Admin" />
                   
                </form>
                <b>You are now an admin</b><br/>
                <b>Login Again</b><br/><br/>
                

                
                <a href="#"><NavLink to="/Login">Login</NavLink></a><br></br>
                <div className="content">
            <Route path="/Login" component={Login}/>
            </div>
            </div>
            </HashRouter>
            

        );
    }
}


export default Mma;