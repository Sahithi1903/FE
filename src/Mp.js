import React from 'react';
//import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import request from 'superagent';
import Login from './Login.js'
class Mp extends React.Component{
    constructor() {
        super();

        this.state = {markers:[]
        }

    }

  //  this.ComponentDidMount = this.ComponentDidMount.bind(this);
  
  
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
    var Login=require('./Login.js');
    var accessToken = localStorage.getItem("accessToken");
  //  this.setState({ markers:[{ lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] });
    
    fetch ( "http://10.10.200.39:9000/forms/all" , 
    {
        
        method: "GET" ,
        headers: {
            "Content-Type": "application/json",
            "Accept"    :   "application,json",
            "Authorization":'Bearer'+ accessToken,
          },

        
}).then(result => result.json())
.then((markers) => this.setState({ markers: markers }));
      
  }

render(){
    var markers = this.state.markers;
    console.log(markers);
    
return(

  <Map center={{ lat: 17.3850,lng: 78.4867}} zoom={15}>
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
);
}
}

export default Mp;
