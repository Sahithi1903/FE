import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login.js';
import Surveyform from './Surveyform.js';
import Edform1 from './Edform1.js';
import Add3 from './Add3.js';
import LatLong2 from './LatLong2';


import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Add2 from './Add2.js';
import Signup from './Signup.js';
//import MovieInfo from './MovieInfo.js';
//import "./Add.css";
//import { Grid, Row, Col} from 'react-bootstrap';

class Add4 extends React.Component {
    constructor() {
        super();

        this.state = {
            survey: [],
        }

    }

    componentDidMount() {

        /*fetch('http://10.10.200.30:9000/movies',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
            .then(response => response.json())
            .then((json) => this.setState({ movie: json }));*/
        var Login = require('./Login.js');
        var accessToken = localStorage.getItem("accessToken");
        fetch('http://10.10.200.39:9000/surveys/all',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": 'Bearer' + accessToken,
                },
            })
            .then(response => response.json())
            .then((survey) => this.setState({ survey: survey }));




    }


    render() {
        const style = {
            display: 'flex',
            flexWrap: 'wrap'
        }
        /*var movies = this.state.movie;
        console.log(movies);
        var movieList = movies.map(function (j, i) {
            console.log(j);

            var rObj = j.title;
            var rAct = j.actors;
            var rPos = j.poster;
            return (
                <div className="col-sm-6 " key={i.toString()}>
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>

                                <Link to={"/MovieInfo/" + (j.imdbID)}>{rObj}

                                    <img src={rPos} id="im" />



                                </Link>

                            </li>

                        </ul>
                    </div>

                </div>
            );*/

        var survey = this.state.survey;
        console.log(survey);
        var surveyList = survey.map(function (j, i) {
            console.log(j);

            var sName = j.name;
            var sDesc = j.description;
            var sState = j.state;
            var sObj = j.id;
            return (
                <nav>
                    
                    <div className="col-sm-6 " key={i.toString()}>
                        <div>

                            <ul className="nav navbar-nav navbar-right">
                                <li>

                                   <button><Link to="/Add2">

                                        {/*<img src={rPos} id="im" />*/}<font color="black">
                                        {sName}<br></br>
                                        {sDesc}<br></br>
                                        {sState}<br></br>
</font>


                                    </Link></button>
                                    <div className="content">
                                        <Route path="/Add2" component={Add2} />
                                        
                                        
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                
                </nav>
            );
        });
        /*var latestmovies = this.state.latestmovie;
    console.log(latestmovies);
    var latestList = latestmovies.map(function (j, i) {
        console.log(j);

        var rObj = j.title;
        var rAct = j.actors;
        var rPos = j.poster;
        return (
            <div className="col-sm-6 " key={i.toString()}>
                <div>
                
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        
                        <Col xs={6} sm={4} md={3}  >
                            <Link to={"/MovieInfo/" + (j.imdbID)}>{rObj}

                                <img src={rPos} id="im" />

                       

                            </Link>
                        </Col>

                        </li>

                    </ul>
                </div>

            </div>
        );
    });*/







        return (
            <HashRouter>
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
                <link rel="stylesheet" href="box.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div className="loginBox">

                <div className="container detail" id="cont">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 detail hello" id="hh">
                            <form className="form-horizontal" role="form" id="detForm">
                                <br />
                                <h2>SurveyList</h2>




                                <div class="panel-group">
                                    <div class="panel panel-default">
                                        <div class="panel-heading"><font color="black">Survey List</font></div>
                                        <div class="panel-body" id="a">{surveyList}</div>
                                    </div>
                                </div>
                                <button><NavLink to="/Surveyform">Add</NavLink></button>
                                <button><NavLink to="/Surveyform">Delete</NavLink></button>
                                <button><NavLink to="/Surveyform">Update</NavLink></button>

                                <a href="#"><NavLink to="/Add2">Next</NavLink></a><br></br>
                                
                                <div className="content">
           
            <Route path="/Add2" component={Add2}/>
            <Route path="/Surveyform" component={Surveyform}/>
            <Route path="/Edform1" component={Edform1}/>
            <Route path="/Add3" component={Add3} />
            <Route path="/LatLong2" component={LatLong2} />
            </div>
                                {/*<div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading">Latest Movies</div>
                                    <div class="panel-body" id="a">

                                        
                                                {latestList}

                                           
                                    </div>
                                </div>


        </div>*/}



                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </HashRouter>
            
        );
    }
}

export default Add4;
