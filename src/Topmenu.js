import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import SurveyList from './SurveyList';
import Add from './Add';
import Googlemap from './Googlemap';
import Edform1 from './Edform1';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class Topmenu extends Component {

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
                {/*<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
                    integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
                    crossorigin="" />
                <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
                    integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
        crossorigin=""></script>*/}


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


                        <button class="btn"><NavLink to="/Googlemap"><i class="fa fa-trash"></i> Trash</NavLink></button>
                        <div class="topnav-right">

                            <button class="btn" /*onClick={this.handle2.bind(this)}*/><NavLink to="/Login"><i class="fa fa-folder"></i> Login</NavLink></button>

                            {/*{this.state.second == false && this.state.first == true && <Login />}*/}




                            <button class="btn" /*onClick={this.handle1.bind(this)}*/><NavLink to="/Signup"><i class="fa fa-folder"></i> Signup</NavLink></button>
                            { /*{this.state.first == false && <Signup />}*/}



                        </div>
                        <div className="content">

                            <Route path="/Stuff" component={Stuff} />

                            <Route path="/Googlemap" component={Googlemap} />
                            <Route path="/Signup" component={Signup} />
                            <Route path="/Login" component={Login} />
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

export default Topmenu;