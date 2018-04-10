import React from 'react';

import './index.css';

export default class Latlong2 extends React.Component {
    constructor() {
        super();
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
            place_formatted: '',
            place_id: '',
            place_location: '',
        };
    }

    componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 17.387140, lng: 78.491684 },
            zoom: 13,
            mapTypeId: 'roadmap',
        });

        map.addListener('zoom_changed', () => {
            this.setState({
                zoom: map.getZoom(),
            });
        });

        map.addListener('maptypeid_changed', () => {
            this.setState({
                maptype: map.getMapTypeId(),
            });
        });

        let marker = new window.google.maps.Marker({
            map: map,
            position: { lat: 17.4062, lng: 78.4691 },
        });

        // initialize the autocomplete functionality using the #pac-input input box
        let inputNode = document.getElementById('pac-input');
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
        let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

        autoComplete.addListener('place_changed', () => {
            let place = autoComplete.getPlace();
            let location = place.geometry.location;

            this.setState({
                place_formatted: place.formatted_address,
                place_id: place.place_id,
                place_location: location.toString(),
            });

            // bring the selected place in view on the map
            map.fitBounds(place.geometry.viewport);
            map.setCenter(location);

            marker.setPlace({
                placeId: place.place_id,
                location: location,
            });
        });
    }

    render() {
        return (
            <div className='mapBox'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="box.css" />
            <div id='latlong'>
                <div id='state'>
                    <h1>Birla Mandir</h1>
                    <p>
                        
                        <b>Accurate Address:</b><br/>Hill Fort Rd, Ambedkar Colony, Khairatabad, Hyderabad, Telangana <br />
                        
                        <b>Coordinates:</b><br/>17.4062	,78.4691<br/><br/>
                        <b>Entry Fee:</b><br/>50<br/><br/>
                        <b>Timings:</b><br/>5am_to_5pm	<br/><br/>
                        <b>Visitors:</b><br/>200<br/><br/>
                        <b>Reviews:</b><br/>One of the peaceful place in Hyderabad<br/><br/>
                    </p>
                </div>
                <br/><br/>
                <div id='pac-container'>
                    
                </div>
                <div id='map' />
            </div>
            </div>
            
        );
    }
};