import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AllTrails extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let trails = this.props.trails;
    let list = trails.map((trail) => {

      return (

        <div className="card" key={trail.unique_id}>
          <h3>{trail.name}</h3>
          <p>{trail.city}, {trail.state}</p>
          <Link to={`/TrailList/${trail.unique_id}`} className="btn btn-info">More Info</Link>
        </div>
      )
    })
      return (
        <div className="card-deck">
          {list}
        </div>
    )
  }
}
    export default AllTrails;
