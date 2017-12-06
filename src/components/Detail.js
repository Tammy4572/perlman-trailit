import React, {Component} from 'react';
import Map from './Map';
import '../styles/App.css';


class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var trail = this.props.trails.find((singleTrail) => {
      console.log(singleTrail.unique_id)
      return singleTrail.unique_id === parseInt(this.props.match.params.id)
    });

    if(this.props.trails.length < 1) {
      return (
          <div className="progress col-md-3">loading
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
  </div>
      )
    }
    return (
      <div className="detail-body">
        <h1 className="trail-title">{trail.name}</h1>
        <hr/>
        <h3>Trail length:
        <p>{trail.activities.length} mile(s)</p></h3>

        <h3 className="detail-subtitle">About the trail:</h3>
        <p className="description">{trail.description}</p>
        <hr/>
        <h3 className="detail-subtitle">Directions:</h3>
        <p>{trail.directions}</p>
        <button><a href={trail.activities[0].url}>More about this location</a></button>


        <p style={{color: "white"}}>Check out where this trail starts on the map below:</p>

        <Map
               center={{lat:trail.lat,lng:trail.lon}}
               zoom={16}
               containerElement={<div style={{ height: `500px`, width: `500px` }} />}
               mapElement={<div style={{ height: `500px`, width: `500px` }} />}
          />
        </div>
    );
  }
}
export default Detail;
