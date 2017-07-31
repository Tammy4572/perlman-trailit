
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import TrailList from './components/TrailsList';
import Detail from './components/Detail';


ReactDOM.render(
  <BrowserRouter>
  <div>
    <nav>
      <NavLink activeClassName="selected" className="nav-link" exact to="/">Trail It Easy</NavLink>
      <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
    </nav>

    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/TrailList" component={TrailList}/>
      <Route path="/TrailList/:id" component={Detail}/>
    </Switch>

  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
