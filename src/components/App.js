import React, { Component } from 'react';
import '../App.css';
// import GoogleMap from './googlemap.js';
const trailAPI = '76b8cb5f85aa3aea5703c33b6ebb90b6040d6008a514da965c5e3e4ad5b83380'



class App extends Component {
  constructor(props){
      super(props);
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Trail It Easy!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <GoogleMap google={this.props.google} /> */}

      </div>
    );
  }
}

export default App;