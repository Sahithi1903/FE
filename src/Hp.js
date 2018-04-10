import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import Hp2 from './Hp2';
import Add from './Add';
import Add2 from './Add2';
import Add3 from './Add3';
import Add4 from './Add4';
import Edform1 from './Edform1';
import Surveyform from './Surveyform';
import Forgotp from './Forgotp';
import LatLong2 from './LatLong2';
import LatLong from './LatLong';
import RoleUp from './RoleUp';
import LatLong3 from './LatLong3';
import LatLong4 from './LatLong4';
import LatLong5 from './LatLong5';
import Gm from './Gm';
import Chrt from './Chrt';
import Sdel from './Sdel';
import Add5 from './Add5';




import Googlemap from './Googlemap';
import img from './Images/bg3.jpg';

import 'leaflet/dist/leaflet.css'
class Hp extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
                    <link rel="stylesheet" href="box.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <div >

                        <div class="w3-bar w3-black w3-card">
                            <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                            <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
                            <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">ANKETRAC</a>
                            <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">RECENT</a>
                            <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
                            <div class="w3-dropdown-hover w3-hide-small">
                                <button class="w3-padding-large w3-button" title="More">DETAILS <i class="fa fa-caret-down"></i></button>
                                <div class="w3-dropdown-content w3-bar-block w3-card-4">
                                    <a href="#" class="w3-bar-item w3-button">Temples</a>
                                    <a href="#" class="w3-bar-item w3-button">Irrigation</a>
                                    <a href="#" class="w3-bar-item w3-button">Education</a>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
                            <div class="topnav-right">

                                <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right"><NavLink to="/Login"><i class="fa fa-folder"></i> Login</NavLink></a>
                                <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right"><NavLink to="/Signup"><i class="fa fa-folder"></i> Signup</NavLink></a>
                                <button class="w3-padding-large w3-button" title="More"><NavLink to="/Add"> Survey</NavLink></button>
                                
                                
                                
                                


                               <div className="content">
                                    <Route path="/Signup" component={Signup} />
                                    <Route path="/Login" component={Login} />
                                    <Route path="/Add" component={Add} />
                                    <Route path="/Add2" component={Add2} />
                                    <Route path="/Add3" component={Add3} />
                                    <Route path="/Forgotp" component={Forgotp}/>
                                    <Route path="/Surveyform" component={Surveyform}/>
                                    <Route path="/Edform1" component={Edform1}/>
                                    <Route path="/Add3/" component={Add3} />
                                    <Route path="/Add4" component={Add4} />
                                    <Route path="/LatLong2" component={LatLong2} />
                                    <Route path="/LatLong" component={LatLong} />
                                    <Route path="/RoleUp" component={RoleUp} />
                                    <Route path="/Hp2" component={Hp2}/>
                                    <Route path="/LatLong3" component={LatLong3} />
                                    <Route path="/Gm" component={Gm} />
                            <Route path="/LatLong4" component={LatLong4} />
                            <Route path="/LatLong5" component={LatLong5} />
                            <Route path="/Chrt" component={Chrt} />
                            <Route path="/Sdel" component={Sdel} />
                            <Route path="/Add5" component={Add5} />
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <img src={img} height={1300} width={3000} />

                    </div>




                    <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top">
                        <a href="#band" class="w3-bar-item w3-button w3-padding-large">BAND</a>
                        <a href="#tour" class="w3-bar-item w3-button w3-padding-large">TOUR</a>
                        <a href="#contact" class="w3-bar-item w3-button w3-padding-large">CONTACT</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding-large">MERCH</a>
                    </div>




                    <div class="w3-container w3-content w3-center w3-padding-64" id="band">
                        <h2 class="w3-wide">ANKETRAC</h2>
                        <p class="w3-opacity"><i>---A Map Survey Tool</i></p>
                        <p class="w3-justify">We have created a survey digitizing website. Anketrac basically helps governments mainly of developing countries like India for decision making by collecting information from various departments and resources in a most simpler way
                        .There wouldn't be any forms that are to be circulated or the officials that must be supervizing.The authorized government officials can directly enter the details of the surveys given.A very attractive map view of whatever is the data entered can be seen.An efficient analysis in form of charts can also be viewed.
                    </p>
                        <div class="w3-row w3-padding-32">
                            <div class="w3-third">
                                <p>Temples</p>
                                <img src="/images/temp.jpeg" class="w3-round w3-margin-bottom" alt="Random Name" />
                            </div>
                            <div class="w3-third">
                                <p>Irrigation</p>
                                <img src="/images/irrigatn.jpeg" class="w3-round w3-margin-bottom" alt="Random Name" />
                            </div>
                            <div class="w3-third">
                                <p>Education</p>
                                <img src="/images/educatn.jpeg" class="w3-round" alt="Random Name" />
                            </div>
                        </div>
                    </div>





                    <div class="w3-black" id="tour">
                        <div class="w3-container w3-content w3-padding-64" >
                            <h2 class="w3-wide w3-center">RECENT</h2>
                            <p class="w3-opacity w3-center"><i>Remember to respond for DEVELOPED INDIA</i></p><br></br>

                            <ul class="w3-ul w3-border w3-white w3-text-grey">
                                <li class="w3-padding">Temples <span class="w3-tag w3-red w3-margin-left">Survey Added</span></li>
                                <li class="w3-padding">Irrigation <span class="w3-tag w3-red w3-margin-left">Survey Modified</span></li>
                                <li class="w3-padding">Education <span class="w3-badge w3-right w3-margin-right">2</span></li>
                            </ul>

                            <div class="w3-row-padding w3-padding-32" >
                                <div class="w3-third w3-margin-bottom">
                                    <img src="/w3images/newyork.jpg" alt="Temples" class="w3-hover-opacity" />
                                    <div class="w3-container w3-white">
                                        <p><b>Temples</b></p>
                                        <p class="w3-opacity">Fri 27 Nov 2016</p>
                                        <p>A survey for recording temple development plan in Telangana has been added.</p>
                                        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Respond</button>
                                    </div>
                                </div>
                                <div class="w3-third w3-margin-bottom">
                                    <img src="/w3images/paris.jpg" alt="Irrigation" class="w3-hover-opacity" />
                                    <div class="w3-container w3-white">
                                        <p><b>Irrigation</b></p>
                                        <p class="w3-opacity">Sat 28 Nov 2016</p>
                                        <p>Details of another water source to be added.</p>
                                        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Respond</button>
                                    </div>
                                </div>
                                <div class="w3-third w3-margin-bottom">
                                    <img src="/w3images/sanfran.jpg" alt="Education" class="w3-hover-opacity" />
                                    <div class="w3-container w3-white">
                                        <p><b>Education</b></p>
                                        <p class="w3-opacity">Sun 29 Nov 2016</p>
                                        <p>None of the surveys are added or modified.</p>
                                        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">None</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="ticketModal" class="w3-modal">
                        <div class="w3-modal-content w3-animate-top w3-card-4">
                            <header class="w3-container w3-teal w3-center w3-padding-32">
                                <span onclick="document.getElementById('ticketModal').style.display='none'"
                                    class="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
                                <h2 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i>Temples</h2>
                            </header>
                            <div class="w3-container">
                                <p><label><i class="fa fa-shopping-cart"></i>Temple annual budget</label></p>
                                <input class="w3-input w3-border" type="text" placeholder="How many?" />
                                <p><label><i class="fa fa-user"></i>Temple</label></p>
                                <input class="w3-input w3-border" type="text" placeholder="Enter email" />
                                <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">Respond <i class="fa fa-check"></i></button>
                                <button class="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i class="fa fa-remove"></i></button>
                                <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
                            </div>
                        </div>
                    </div>



                    <div class="w3-container w3-content w3-padding-64" id="contact">
                        <h2 class="w3-wide w3-center">CONTACT</h2>
                        <p class="w3-opacity w3-center"><i>Doubt? Drop a note!</i></p>
                        <div class="w3-row w3-padding-32">
                            <div class="w3-col m6 w3-large w3-margin-bottom">
                                <i class="fa fa-map-marker"></i> Hyderabad,India<br></br>
                                <i class="fa fa-phone"></i> Phone: +00 151515<br></br>
                                <i class="fa fa-envelope"> </i> Email: anketrac@gmail.com<br></br>
                            </div>
                            <div class="w3-col m6">
                                <form action="/action_page.php" target="_blank">
                                    <div class="w3-row-padding">
                                        <div class="w3-half">
                                            <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                                        </div>
                                        <div class="w3-half">
                                            <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                                        </div>
                                    </div>
                                    <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                                    <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
                                </form>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9988172865346!2d78.39641151412098!3d17.41184440668399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96b085001d67%3A0x4f48deff88efc042!2sG.+Narayanamma+Institute+of+Technology+and+Science!5e0!3m2!1sen!2sin!4v1519715755313" width="600" height="450" frameborder="0"  allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>



                </div>
            </HashRouter>
        );
    }
}
export default Hp;