import React, {Component} from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import AllTrails from './AllTrails';
import Detail from './Detail';


class TrailsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    };
  }
  componentDidMount() {
       var headers = {
               "method": "GET",
               "Content-Type": "application/json",
               "X-Mashape-Key": "E0wgmylcqimshyyMbitb6pMfqkNBp1HfFVNjsn3a6Agqh3YVFP",
               "credentials": "include"
       }
      var url = ('https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&radius=25')
      fetch(url, {headers}).then((res) => {
        console.log(res)
        return res.json();
      }).then((data) => {
        // console.log(data)
        this.setState({places: data.places})
        console.log(this.state.places)

      });
  }

  render() {

    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/TrailList" render={() => (<AllTrails trails={this.state.places}/>)} />
            <Route exact path="/TrailList/:id" render={(props) => (<Detail {...props} trails={this.state.places}/>)} />

          </Switch>
        </BrowserRouter>



    );
  }
}

export default TrailsList;
