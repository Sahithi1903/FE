import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login.js';
import Add3 from './Add3.js';
import Edform1 from './Edform1';
import LatLong2 from './LatLong2';
import LatLong3 from './LatLong3';
import LatLong4 from './LatLong4';
import LatLong5 from './LatLong5';
import LatLong from './LatLong';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
//import MovieInfo from './MovieInfo.js';
//import "./Add.css";
//import { Grid, Row, Col} from 'react-bootstrap';

class Add2 extends React.Component {
    constructor() {
        super();

        this.state = {
            survey2:[],
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
            fetch('http://10.10.200.39:9000/forms/all',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": 'Bearer' + accessToken,
                },
            })
            .then(response => response.json())
            .then((survey2) => this.setState({ survey2: survey2 }));
            


    }


    render() {
        const style={
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

            var survey2 = this.state.survey2;var m;
        console.log(survey2);
        var surveyList = survey2.map(function (j, i) {
            console.log(j);
            var sTname = j.name; 
            var sTaddress = j.address;  
            return (
                <HashRouter>
                    
                <div>
                    <div>
                        
                        <ul>
                            <li>

                                {/*<NavLink to={"/Add3/" + (j.imdbID)}>{sObj}*/}

                                    {/*<img src={rPos} id="im" />*/}
                                   <font color="white"> <button><NavLink to="/LatLong5">{sTname}</NavLink></button><br></br></font>
                                   <div className="content">
                                    <Route path="/Add3" component={Add3} />
                                    <Route path="/LatLong5" component={LatLong5} />
                                    <Route path="/LatLong" component={LatLong} />
                                </div>



                               {/*</NavLink>*/}

                            </li>

                        </ul>
                    </div>

                </div>
                </HashRouter>
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
            
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
                    <link rel="stylesheet" href="box.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <div className="loginBox">
   
            <div>
                <div>
                    <div>
                        <form>
                            <br />
                            <h2>SurveyList</h2>




                            <div>
                                <div>
                                    <div class="panel-heading"><font color="white"> Survey List</font></div>
                                    <div class="panel-body" id="a">
                                    <ul className="nav navbar-nav navbar-right">
                            <li>

                                {/*<NavLink to={"/Add3/" + (j.imdbID)}>{sObj}*/}

                                    {/*<img src={rPos} id="im" />*/}
                                   <font color="white"> <button><NavLink to="/LatLong2">Birla Mandir</NavLink></button><br></br></font>
                                   



                               {/*</NavLink>*/}

                            </li><br/>


                            <li>

                                {/*<NavLink to={"/Add3/" + (j.imdbID)}>{sObj}*/}

                                    {/*<img src={rPos} id="im" />*/}
                                   <font color="white"> <button><NavLink to="/LatLong3">Filmnagar Temple</NavLink></button><br></br></font>
                                   



                               {/*</NavLink>*/}

                            </li><br/>


                            <li>

                                {/*<NavLink to={"/Add3/" + (j.imdbID)}>{sObj}*/}

                                    {/*<img src={rPos} id="im" />*/}
                                   <font color="white"> <button><NavLink to="/LatLong4">Thousand Pilar Temple	</NavLink></button></font>
                                   



                               {/*</NavLink>*/}

                            </li>

                        </ul>{surveyList}</div>
                                </div>
                            </div>
                            <button><NavLink to="/Edform1">Add</NavLink></button><br></br>
                            <Route path="/Edform1" component={Edform1}/>
                            <Route path="/LatLong2" component={LatLong2} />
                            <Route path="/LatLong3" component={LatLong3} />
                            <Route path="/LatLong4" component={LatLong4} />
                            <Route path="/LatLong5" component={LatLong5} />
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
        );
    }
}

export default Add2;
