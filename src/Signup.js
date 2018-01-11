import React, { Component } from 'react';

class Signup extends Component
{
    render(){
        return(
            <div className="loginBox">
            <h2> Sign Up Here</h2>
            <form>
              <p>User Name</p>
              <input type="text" name="" placeholder="Enter User Name"/>
              <p>Date Of Birth</p>
              <input type="text" name="" placeholder="Enter DOB"/>
              <p>Password</p>
              <input type="password" name="" placeholder="*******"/>
              <p>Confirm Password</p>
              <input type="password" name="" placeholder="*******"/>
              <input type="submit" name="" value="Sign up"/>
              <a href="#">Login</a>
            </form>
        </div>
        );
    }
}

export default Signup;
