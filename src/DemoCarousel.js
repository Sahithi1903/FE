import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';


 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <link rel="stylesheet" href="carousel.css"/>
                    <img src="Images/bg1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="Images/bg2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="Images/bg3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
 


export default DemoCarousel;
 