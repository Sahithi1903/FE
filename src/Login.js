import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Topmenu2 from './Topmenu2';
import Forgotp from './Forgotp';
import Signup from './Signup';
import Hp2 from './Hp2';
import ReactDOM from 'react-dom';

class Login extends Component
{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            isLoggedIn:"false",
            json : [] ,
         }

         this.handleSubmit=this.handleSubmit.bind(this);
         this.handleUsernameChange=this.handleUsernameChange.bind(this);
         this.handlePasswordChange=this.handlePasswordChange.bind(this);
         
        }
    

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            value:event.target.value,
        });
         
        var uname = document.getElementById('name').value;
        var upwd  = document.getElementById('pwd').value;
        var accessToken,refreshtoken,expirytime;
        var urole = 'Admin';
        var form = JSON.stringify({username : uname, password : upwd, role : urole});
        fetch ( "http://10.10.200.39:9000/users/login" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json"
                
              },       
            body: form, 
    }).then(result1=>result1.json())
    .then(function(result1){
        window.alert("Login successful");
        accessToken=window.localStorage.getItem('result1.access_token');
        expirytime=window.localStorage.getItem('response.expiry_time');
        refreshtoken=window.localStorage.getItem('response.refresh_token');
        
        console.log(result1);
        accessToken = result1.access_token;
        console.log(accessToken);
        localStorage.setItem("accessToken",result1.access_token);
        //result1.access_token=localStorage.getItem("accessToken");
        //module.exports={data:"accessToken"};
        window.location.href="./Hp2";
        <Route path="/Hp2" exact component={Hp2}/>
        
        
        

        
    }).then(function(data1){
        if(data1.role=="user")
        window.location.href="./Hp2";
        else
        window.location.href="./Hp2";

    })
    .catch(function(error){
       //window.alert("please enter correct details");
       console.log(error);
    });
        //console.log(form);
    
    }
    

    handleUsernameChange(event) {
        this.setState({
            username:event.target.value,
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password:event.target.value,
        })
    }

    render(){
        return(
            <HashRouter>
            <div className="loginBox">
            <h2> Log in Here</h2>
            <form onSubmit={this.handleSubmit}>
            
            <p>User Name</p>
            <input type="text" 
            id="name"
          
            placeholder="Enter User Name" 
            onChange={this.handleUsernameChange} 
            value={this.state.username} required/>
            
            <p>Password</p>
            <input type="password" 
            id="pwd"
           
            placeholder="*******" 
            onChange={this.handlePasswordChange} 
            value={this.state.password} required/>
            
            <input type="submit" className="" value="Login In"/>
            <a href="#"><NavLink to="/Signup">Sign Up</NavLink></a><br></br>
            
            {/*<a href="#"><NavLink to="/Forgotp">Forgot password</NavLink></a><br/>*/}
            <a href="#"><NavLink to="/Hp2"><font color="black">F</font></NavLink></a>
            
            <a href="#"><NavLink to="/Hp2"></NavLink></a>
            
           

            <div className="content">
            <Route path="/Forgotp" component={Forgotp}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Hp2" component={Hp2}/>
            </div>
           
          </form>
         
          </div>
          </HashRouter>

        );
    }
}

export default Login;