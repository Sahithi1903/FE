import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login.js';
import Surveyform from './Surveyform.js';
import Edform1 from './Edform1.js';
import Add3 from './Add3.js';
import Add4 from './Add4.js';
import LatLong2 from './LatLong2';
import LatLong from './LatLong';
import RoleUp from './RoleUp';
import LatLong3 from './LatLong3';
import LatLong4 from './LatLong4';
import LatLong5 from './LatLong5';



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

class Add extends React.Component {
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
                    
                    <div  key={i.toString()}>
                        <div>

                            <ul>
                                <li>

                                   <button><Link to="/Add2">

                                        {/*<img src={rPos} id="im" />*/}<font color="black">
                                        {sName}<br></br>
                                        
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

                <div >
                    <div>
                        <div>
                            <form>
                                <br />
                                <h2><font color="white">SurveyList</font></h2>




                                <div >
                                    <div>
                                        <div class="panel-heading"><font color="black"></font></div>
                                        <div class="panel-body" id="a">{surveyList}</div>
                                    </div>
                                </div>
                                {/*<button><NavLink to="/Surveyform">Add</NavLink></button><br></br>*/}
                                <a href=""><NavLink to="/Add4">Next</NavLink></a><br></br>
                                <a href=""><NavLink to="/RoleUp">Ne</NavLink></a><br></br>
                                
                                <div className="content">
           
            <Route path="/Add2" component={Add2}/>
            <Route path="/Add4" component={Add4}/>
            <Route path="/Surveyform" component={Surveyform}/>
            <Route path="/Edform1" component={Edform1}/>
            <Route path="/Add3" component={Add3} />
            <Route path="/LatLong2" component={LatLong2} />
            <Route path="/LatLong" component={LatLong} />
            <Route path="/RoleUp" component={RoleUp} />
            <Route path="/LatLong3" component={LatLong3} />
                            <Route path="/LatLong4" component={LatLong4} />
                            <Route path="/LatLong5" component={LatLong5} />
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

export default Add;
