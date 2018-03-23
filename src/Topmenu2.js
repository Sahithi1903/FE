import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import SurveyList from './SurveyList';
import Edform1 from './Edform1';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class Topmenu2 extends Component {

    constructor() {
        super();
        var Login = require('./Login.js');
        var accessToken = localStorage.getItem("accessToken");
        this.state = { first: true, second: true, third: true, at: "accessToken" };


    }
    handle1() {
        console.log(this.state.value);
        this.setState({ first: false })
    }
    handle2() {
        console.log(this.state.value);
        this.setState({ second: false })
    }
    handle3() {
        console.log(this.state.value);
        this.setState({ third: false })
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="box.css" />
                

                <HashRouter>
                    <div >
                        <button class="btn"><i class="fa fa-home"></i> Home</button>
                        <div class="dropdown">
                            <button class="btn"><i class="fa fa-bars"></i> Menu</button>
                            <div class="dropdown-content" >
                                <a href="#" onClick={this.handle3.bind(this)}>Temples
                     {this.state.third == false && <Edform1 />}
                                </a>
                                <a href="#">Education</a>
                                <a href="#"> Irrigation</a>
                            </div>
                        </div>


                        <button class="btn"><NavLink to="/SurveyList"><i class="fa fa-trash"></i> Trash</NavLink></button>
                        <div class="topnav-right">

                            <button class="btn" /*onClick={this.handle2.bind(this)}*/><NavLink to="/Login"><i class="fa fa-folder"></i> Profile</NavLink></button>

                            {/*{this.state.second == false && this.state.first == true && <Login />}*/}




                            
   

                        </div>
                        <div className="content">

                            <Route path="/Stuff" component={Stuff} /> 
                            <Route path="/SurveyList" component={SurveyList} />
                            <Route path="/Login" component={Login}/>
                        </div>

                    </div>
                </HashRouter>



















                <div class="navbar">
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>
                    <b><a href="#contact"></a></b>


                    <b><a href="#"><i class="fa fa-search"></i></a> </b>
                    <b><a href="#"><i class="fa fa-envelope"></i></a> </b>
                    <b><a href="#"><i class="fa fa-globe"></i></a></b>
                    <b><a href="#"><i class="fa fa-trash"></i></a></b>
                </div>



            </div>



        );
    }


}

export default Topmenu2;