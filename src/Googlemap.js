import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import request from 'superagent';
import 'leaflet/dist/leaflet.css';
import Login from './Login.js'

import FullscreenControl from 'react-leaflet-fullscreen';

class Googlemap extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      /*user:"",
      locations: {
        "gnit":[17.4118166,78.3967619],
        "charminar":[17.3615687,78.4724758]
        */
        zoom: 100,
      markers:[]
      };
    
  // this.ComponentDidMount = this.ComponentDidMount.bind(this);
  }
  
/*  ComponentDidMount(){
    const promise= request.get("http://localhost:9000/locations");
    const onSuccess=(val)=>{this.setState({user: val.body.login })};
    promise.then(onSuccess);
  }*/
  componentWillMount() {
    //this.setState({ markers:[] })
    //this.setState({ markers:{  lat: 17.3850,lng: 78.4867} });
  }

  componentDidMount() {

    window.dispatchEvent(new Event('resize'));
    

    /*this.setState({ markers:[
      { lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},
      { lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}
    ]});*/
    const url = [
      // Length issue
      'http://10.10.200.39:9000','/forms/all'
    ].join("")
    var Login=require('./Login.js');
    var accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    fetch(url, {
      
      method: "GET" ,
      headers: {
          "Content-Type": "application/json",
          "Accept"    :   "application/json",
          "Authorization":'Bearer'+ accessToken,
        },
})
.then(response => response.json())
.then((markers) => this.setState({ markers: markers }));
      
  }

render(){
  
return(
  <h1 title='Map'>
  
<div>
  <Map center={{lat:17.411846, lng:78.398527}} zoom={15} style={{height:400, width:'50%'}}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {this.state.markers.map((marker,i) => (
      <Marker position={{ lat: marker.latitude,lng: marker.longitude}}>
        <Popup>
          <span>
           {marker.latitude}
          </span>
        </Popup>
      </Marker>
        )) }
    
  </Map>
  </div>
  </h1>

);
}
}

export default Googlemap;