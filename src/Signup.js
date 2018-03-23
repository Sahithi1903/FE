import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Forgotp from './Forgotp';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            empid: "",
            password: "",
            cpassword: "",
            email:"",
            json: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEmployeeidChange = this.handleEmployeeidChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCPasswordChange = this.handleCPasswordChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value,
        });
        var uname = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var ueid = document.getElementById('eid').value;
        var upwd = document.getElementById('pwd').value;
        var ucpwd = document.getElementById('cpwd').value;
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        if (!re.test(upwd)) {
            alert("Invalid password")
        }
        else {
            if (upwd != ucpwd) {
                alert("passwords do not match");
            }

        }


        var form = JSON.stringify({ username: uname, empid: ueid, password: upwd, cpassword: ucpwd,email: email});
        fetch("http://10.10.200.39:9000/users/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json"

                },

                body: form,
            });
        console.log(form);

    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
        })
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        })
    }
    handleEmployeeidChange(event) {
        this.setState({
            empid: event.target.value,
        })
    }

    handleCPasswordChange(event) {
        this.setState({
            cpassword: event.target.value,
        })
    }

    render() {
        return (
            <HashRouter>
            <div className="loginBox">
                <h2> Sign Up Here</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>USER NAME</p>
                    <input type="text"
                        className="" id="name"
                        placeholder="Enter User Name"
                        onChange={this.handleUsernameChange}
                        value={this.state.username} required />

                    <p>EMAIL ID</p>
                    <input type="text"
                        className="" id="email"
                        placeholder="Enter email id"
                        onChange={this.handleEmailChange}
                        value={this.state.email} required />

                    <p>Employee id</p>
                    <input type="text"
                        className="" id="eid"
                        placeholder="Enter Employee id"
                        onChange={this.handleEmployeeidChange}
                        value={this.state.empid} required />

                    <p>Password</p>
                    <input type="password"
                        className="" id="pwd"
                        placeholder="*******"
                        onChange={this.handlePasswordChange}
                        value={this.state.password} required /><br></br>
                    <font color="white" size="1.5">Input must contain atleast one digit,lower case,uppercase and be atleast 6 characters long.</font><br></br><br></br>

                    <p>Confirm Password</p>
                    <input type="password"
                        className="" id="cpwd"
                        placeholder="*******"
                        onChange={this.handleCPasswordChange}
                        value={this.state.cpassword} required />
                    <input type="submit"
                        className=""
                        value="Sign up" />
                    <a href="#">Login</a>
                </form>
                <div className="content">
            <Route path="/Forgotp" component={Forgotp}/>
            
            </div>
            </div>
            </HashRouter>
        );
    }
}

export default Signup;
