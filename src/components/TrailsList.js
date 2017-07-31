import React, {Component} from 'react';

class TrailsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'places': [],
    }
  }
  componentDidMount() {

      var url = 'https://crossorigin.me/https://api.transitandtrails.org/api/v1/trailheads/?key=76b8cb5f85aa3aea5703c33b6ebb90b6040d6008a514da965c5e3e4ad5b83380&callback=?'
      fetch(url).then((res) => {
        console.log(res)

        return res.json();
      }).then((data) => {
        console.log(data)
        console.log(this.state.places)
        this.setState({places: data})

      });
  }

  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
              <h1>Category: {this.props.places}</h1>
          </div>
          {/*
            Pass the following props to View: details and endpoint.
            */}
        </div>
      </div>
    );
  }
}

export default TrailsList;
