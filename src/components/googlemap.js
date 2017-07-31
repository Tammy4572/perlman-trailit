import { GoogleMap, Marker } from "react-google-maps";
import {
  default as React,
  Component,
  PropTypes,
  Children,
} from "react";

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE"

export default class GoogleMap extends Component {
  constructor(props){
      super(props);
}
  render() {
    return (
      <div>
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    // Pass the map reference here as props
    googleMapURL={googleMapURL}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
</div>
);
}
}
