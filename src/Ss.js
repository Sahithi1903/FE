import React, { Component } from 'react';

class Ss extends Component {
    
     

    render() {
        return (
            <div>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="Ss.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />




                <div class="w3-top">
                    <div class="w3-bar w3-black w3-card">
                        <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                        <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
                        <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
                        <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
                        <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
                        <div class="w3-dropdown-hover w3-hide-small">
                            <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>
                            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                                <a href="#" class="w3-bar-item w3-button">Merchandise</a>
                                <a href="#" class="w3-bar-item w3-button">Extras</a>
                                <a href="#" class="w3-bar-item w3-button">Media</a>
                            </div>
                        </div>
                        <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
                    </div>
                </div>



                <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
                    <a href="#band" className="w3-bar-item w3-button w3-padding-large">BAND</a>
                    <a href="#tour" className="w3-bar-item w3-button w3-padding-large">TOUR</a>
                    <a href="#contact" className="w3-bar-item w3-button w3-padding-large">CONTACT</a>
                    <a href="#" className="w3-bar-item w3-button w3-padding-large">MERCH</a>
        </div>



                <div class="w3-content" style="max-width:2000px;margin-top:46px">



                   <div class="mySlides w3-display-container w3-center">
                        <img src="bg.jpg" style="width:100%">
                            <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                                <h3>Los Angeles</h3>
                                <p><b>We had the best time playing at Venice Beach!</b></p>
                            </div>
                        </img>
                    </div>
                    <div class="mySlides w3-display-container w3-center">
                        <img src="bg1.jpg" style="width:100%">
                            <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                                <h3>New York</h3>
                                <p><b>The atmosphere in New York is lorem ipsum.</b></p>
                            </div>
                        </img>
                    </div>
                    <div class="mySlides w3-display-container w3-center">
                        <img src="bg2.jpg" style="width:100%">
                            <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                                <h3>Chicago</h3>
                                <p><b>Thank you, Chicago - A night we won't forget.</b></p>
                            </div>
                        </img>
    </div>



                    <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
                        <h2 class="w3-wide">THE BAND</h2>
                        <p class="w3-opacity"><i>We love music</i></p>
                        <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="w3-row w3-padding-32">
                            <div class="w3-third">
                                <p>Name</p>
                                <img src="/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
                                </img> </div>
                            <div class="w3-third">
                                <p>Name</p>
                                <img src="/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
                                </img></div>
                            <div class="w3-third">
                                <p>Name</p>
                                <img src="/w3images/bandmember.jpg" class="w3-round" alt="Random Name" style="width:60%">
                                </img></div>
                        </div>
                    </div>



                    <div class="w3-black" id="tour">
                        <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
                            <h2 class="w3-wide w3-center">TOUR DATES</h2>
                            <p class="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br></br>

                            <ul class="w3-ul w3-border w3-white w3-text-grey">
                                <li class="w3-padding">September <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
                                <li class="w3-padding">October <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
                                <li class="w3-padding">November <span class="w3-badge w3-right w3-margin-right">3</span></li>
                            </ul>

                            <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
                                <div class="w3-third w3-margin-bottom">
                                    <img src="/w3images/newyork.jpg" alt="New York" style="width:100%" class="w3-hover-opacity">
                                        <div class="w3-container w3-white">
                                            <p><b>New York</b></p>
                                            <p class="w3-opacity">Fri 27 Nov 2016</p>
                                            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                            <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
                                        </div></img>
                                </div>
                                <div class="w3-third w3-margin-bottom">
                                    <img src="/w3images/paris.jpg" alt="Paris" style="width:100%" class="w3-hover-opacity">
                                        <div class="w3-container w3-white">
                                            <p><b>Paris</b></p>
                                            <p class="w3-opacity">Sat 28 Nov 2016</p>
                                            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                            <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
                                        </div></img>
                                </div>
                                <div class="w3-third w3-margin-bottom">
                                    <img src="/w3images/sanfran.jpg" alt="San Francisco" style="width:100%" class="w3-hover-opacity">
                                        <div class="w3-container w3-white">
                                            <p><b>San Francisco</b></p>
                                            <p class="w3-opacity">Sun 29 Nov 2016</p>
                                            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                            <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
                                        </div></img>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="ticketModal" class="w3-modal">
                        <div class="w3-modal-content w3-animate-top w3-card-4">
                            <header class="w3-container w3-teal w3-center w3-padding-32">
                                <span onclick="document.getElementById('ticketModal').style.display='none'"
                                    class="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
                                <h2 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
                            </header>
                            <div class="w3-container">
                                <p><label><i class="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
                                <input class="w3-input w3-border" type="text" placeholder="How many?" />
                                <p><label><i class="fa fa-user"></i> Send To</label></p>
                                <input class="w3-input w3-border" type="text" placeholder="Enter email" />
                                <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i class="fa fa-check"></i></button>
                                <button class="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i class="fa fa-remove"></i></button>
                                <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
                            </div>
                        </div>
                    </div>




                    <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
                        <h2 class="w3-wide w3-center">CONTACT</h2>
                        <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
                        <div class="w3-row w3-padding-32">
                            <div class="w3-col m6 w3-large w3-margin-bottom">
                                <i class="fa fa-map-marker" style="width:30px"></i> Chicago, US<br></br>
                                <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br></br>
                                <i class="fa fa-envelope" style="width:30px"> </i> Email: mail@mail.com<br></br>
                            </div>
                            <div class="w3-col m6">
                                <form action="/action_page.php" target="_blank">
                                    <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
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
                            </div>
                        </div>
                    </div>



                </div>



                <div>
                    <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
                        <i class="fa fa-facebook-official w3-hover-opacity"></i>
                        <i class="fa fa-instagram w3-hover-opacity"></i>
                        <i class="fa fa-snapchat w3-hover-opacity"></i>
                        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i class="fa fa-twitter w3-hover-opacity"></i>
                        <i class="fa fa-linkedin w3-hover-opacity"></i>
                        <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
                    </footer>
                </div>













            </div>
        );
    }
}

export default Ss;