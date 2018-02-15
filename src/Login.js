import React, { Component } from 'react';


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
        fetch ( "http://10.10.200.39:9000/userver" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json"
                
              },       
            body: form, 
    }).then(result1=>result1.json())
    .then(function(result1){
        //accesstoken=window.localStorage.getItem('result1.access_token');
        //expirytime=window.localStorage.getItem('response.expiry_time');
        //refreshtoken=window.localStorage.getItem('response.refresh_token');
        
        console.log(result1);
        accessToken = result1.access_token;
        console.log(accessToken);
        localStorage.setItem("accessToken",result1.access_token);
        result1.access_token=localStorage.getItem("accessToken");
        module.exports={data:"accessToken"};

        
    })
    .catch(function(error){
        console.log(error);
    });
        console.log(form);
    
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
            
            <input type="submit" className="" value="Login In" />
            <a href="#">Sign In</a>
          </form>
          </div>

        );
    }
}

export default Login;