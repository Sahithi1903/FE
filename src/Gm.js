import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer, Polyline,CircleMarker } from 'react-leaflet';
import request from 'superagent';
class Gm extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      /*user:"",
      locations: {
        "gnit":[17.4118166,78.3967619],
        "charminar":[17.3615687,78.4724758]
        */
      markers:[],
      arrColour: [],
      }
    
  //  this.ComponentDidMount = this.ComponentDidMount.bind(this);
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
  //  this.setState({ markers:[{ lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] });
    const url = [
      // Length issue
      'http://10.10.200.39:9000','/forms/all'
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ markers: result});
        console.log(this.state.markers[0].latitude);
      });
      
  }

render(){
  for (var i = 0; i < this.state.markers.length; i++) {
    if(this.state.markers[i].visitors>300)
    this.state.arrColour.push("red");
    else
    this.state.arrColour.push("blue");    
}
console.log(this.state.arrColour[2]);
return(
  <div className="chartBox">

  <Map center={{ lat: 17.3850,lng: 78.4867}} zoom={15}>
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
    />
    
     {this.state.markers.map((j,i) => (
       console.log(i),
    <CircleMarker center={{ lat: j.latitude,lng: j.longitude}} radius={8} color={this.state.arrColour[i]}>
      <Popup>
        <span>
        <b>Name:</b>{j.name}<br/>
        <b>Timings:</b>{j.timings}<br/>
        <b>Entryfee:</b>{j.entryFee}<br/>
        <b>Visitors:</b>{j.visitors}<br/>
        <b>Reviews:</b>{j.reviews}<br/>
        <b>Address:</b>{j.address}<br/>
         
         
         
        </span>
      </Popup>
    </CircleMarker>
      )) }
    
  </Map>
  </div>
);
}
}

export default Gm;
