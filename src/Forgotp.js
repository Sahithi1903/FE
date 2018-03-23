import React, { Component } from 'react';

class Forgotp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);


    }
    handleSubmit(event) {
        console.log('in');
        event.preventDefault();
        this.setState({
            value: event.target.value,
        });
        console.log('here');
        var email = document.getElementById('email').value;
        var form = JSON.stringify({ email: email });
        fetch("http://10.10.200.39:9000/forgotP/:email",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",

                },
            });
    }


    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        })
    }

    render() {
        return (
            <div><p>EMAIL ID</p>
                <input type="text"
                    className="" id="email"
                    placeholder="Enter email id.."
                    onChange={this.handleEmailChange}
                    value={this.state.email} required />
                    <input type="submit"
                        className=""
                        value="Send" /></div>
        );
    }
}

export default Forgotp;