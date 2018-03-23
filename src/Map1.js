import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login.js';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import request from 'superagent';
class Map1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: [],
    }

    this.ComponentDidMount = this.ComponentDidMount.bind(this);
  }

  ComponentDidMount() {
    //const promise= request.get("http://localhost:9000/locations");
    // const onSuccess=(val)=>{this.setState({user: val.body.login })};
    //promise.then(onSuccess);
    var Login = require('./Login.js');
    var accessToken = localStorage.getItem("accessToken");console.log('before fetch');
    request.get('http://10.10.200.39:9000/forms/all',
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
      console.log('');
  }
  render() {
    var survey = this.state.survey;
    const gnit = [17.4118166, 78.3967619];







    var survey = this.state.survey;
    console.log(survey);
    var surveyList = survey.map(function (j, i) {
      console.log(j);

      var sTempname = j.templename;
      var sPlace = j.place;
      var sTimings = j.timings;
      var sVisitors = j.visitors;
      var sFile = j.file;
      var sLat = j.lat;
      var sLong = j.long;
      var sObj = j.id;
      return (

        <div>
          {/*<img src={rPos} id="im" />*/}
          {sTempname}<br></br>
          {sPlace}<br></br>
          {sTimings}<br></br>
          {sVisitors}
          {sFile}
          {sLat}
        </div>
      );
    });









    return (
      <div className="mapBox">
     <div id="mapid">
      <Map center={{lat:17.3850,lng:78.4867}}zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={{lat:17.3850,lng:78.4867}}>
          <Popup>
            <span>
              {surveyList.sTempname}
              {surveyList.sPlace}
              {surveyList.sTimings}
              {surveyList.sVisitors}
              {surveyList.sFile}
              {surveyList.sLatlong}
            </span>
          </Popup>
        </Marker>






      </Map>
      </div>
      </div>
    );
  }
}



export default Map1;

