import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { history } from './helpers';

import Home from './pages/Home';
import Login from './pages/Auth';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';

export default class App extends Component {
  render() {
    return (
      <div className="Main">
        <Router history={history}>
          <Switch>
            <Route path="/question/1" component={Question1} />
            <Route path="/question/2" component={Question2} />
            <Route path="/question/3" component={Question3} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Login} />
            <Route path="*" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
