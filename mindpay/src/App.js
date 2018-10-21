import _ from 'lodash';
import React, { Component } from 'react';
import { MuseClient, channelNames } from 'muse-js';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/timer';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blinking: false
    };

    this.muse = new MuseClient();
  }

  async handleClick(e) {
    e.preventDefault();

    await this.muse.connect();
    await this.muse.start();

    const leftEyeChannel = channelNames.indexOf('AF7');

    // this.leftBlinks = this.muse.eegReadings
    // .filter(r => r.electrode === leftEyeChannel)
    // .map(r => Math.max(...r.samples.map(n => Math.abs(n))))
    // .filter(max => max > 500)
    // .switchMap(() =>
    //   Observable.merge(
    //     Observable.of(1),
    //     Observable.timer(500).map(() => 0)
    //   )
    // );
    //
    // this.leftBlinks.subscribe(value => {
    //   this.setState({ blinking: value });
    // });


    this.muse.eegReadings.subscribe(r => {
      if (r.electrode !== leftEyeChannel) return;
      const blinking = Math.max(...r.samples.map(n => Math.abs(n))) > 500;
      this.setState({ blinking })
    });
    //
    // this.muse.telemetryData.subscribe(telemetry => {
    //   console.log(telemetry);
    // });
    //
    // this.muse.accelerometerData.subscribe(acceleration => {
    //   console.log(acceleration);
    // });
  }

  render() {
    const { blinking } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>{blinking ? 'Yes' : 'No'}</p>
          <p onClick={this.handleClick.bind(this)}>Connect Mind</p>
        </header>
      </div>
    );
  }
}

export default App;
