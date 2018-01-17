import React, { Component } from 'react';

class Login extends Component
{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
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
        var urole = 'Admin';
        var form = JSON.stringify({username : uname,password : upwd, role : urole});
        fetch ( "http://10.10.200.39:9000/Users" , 
        {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json"
                
              },

            body:form , 
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
            value={this.state.username} />
            
            <p>Password</p>
            <input type="password" 
            id="pwd"
           
            placeholder="*******" 
            onChange={this.handlePasswordChange} 
            value={this.state.password}/>
            
            <input type="submit" className="" value="Login In" />
            <a href="#">Sign In</a>
          </form>
          </div>

        );
    }
}

export default Login;