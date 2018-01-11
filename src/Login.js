import React, { Component } from 'react';

class Login extends Component
{
    render(){
        return(
            <div className="loginBox">
            <h2> Log in Here</h2>
            <form>
            <p>User Name</p>
            <input type="text" name="" placeholder="Enter User Name"/>
            <p>Password</p>
            <input type="password" name="" placeholder="*******"/>
            <input type="submit" name="" value="Login In"/>
            <a href="#">Sign In</a>
          </form>
          </div>

        );
    }
}

export default Login;