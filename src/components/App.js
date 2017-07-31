import React, { Component } from 'react';
import '../styles/App.css';
import Searchbox from './Searchbox';
import Featuredloc from './Featuredloc'

// import GoogleMap from './googlemap.js';
const trailAPI = '76b8cb5f85aa3aea5703c33b6ebb90b6040d6008a514da965c5e3e4ad5b83380'


class App extends Component {
     constructor(props){
          super(props)
     }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Trail It Easy!</h2>
        </div>
        <div className="App-intro">
          <Searchbox />
          <Featuredloc />
        </div>

{this.props.children}
     {/* //    { <GoogleMap google={this.props.google} /> } */}
     {/* <GoogleMap /> */}
      </div>
    );
  }
}

export default App;
