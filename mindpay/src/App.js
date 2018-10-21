import _ from 'lodash';
import React, { Component } from 'react';
import { MuseClient, channelNames } from 'muse-js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      confirmed: false
    };

    this.muse = new MuseClient();

    let
      lastTime = Date.now(),
      lastDecision = lastTime,
      confirmCount = 0;

    setInterval(() => {

    }, 10);
  }

  async handleClick(e) {
    e.preventDefault();

    await this.muse.connect();
    await this.muse.start();

    let lastTime = Date.now();

    this.muse.eegReadings.subscribe(r => {
      const { samples } = r;
      const currentTime = Date.now();

      if (currentTime - lastTime > 3000) {
        this.setState({ confirmed: false });
        return lastTime = currentTime;
      }

      if (Math.max(...samples.map(n => Math.abs(n))) > 500) {
        this.setState({ confirmed: true });
      }
    });
  }

  render() {
    const { confirmed } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>Confirmed: {confirmed ? 'Yes' : 'No'}</p>
          <button onClick={this.handleClick.bind(this)}>Connect Mind</button>
        </header>
      </div>
    );
  }
}

export default App;
