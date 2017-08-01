import React, {Component} from 'react';
import Map from './Map';


class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var trail = this.props.trails.find((singleTrail) => {
      console.log(singleTrail.unique_id)
      return singleTrail.unique_id === parseInt(this.props.match.params.id)
    });

    console.log(trail.lat);
    if(this.props.trails.length < 1) {
      return (
        <div>loading</div>
      )
    }
    return (
      <div>
        <h1>hello</h1>
        {trail.name}
        {trail.description}
        {trail.activities[0].url}
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
