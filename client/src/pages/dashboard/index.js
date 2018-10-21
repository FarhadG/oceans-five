import React, { Component } from 'react';
import { MuseClient, channelNames } from 'muse-js';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/timer';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
import 'rxjs';

import ViewHeader from './view-header';
import ViewContent from './view-content';

// styling
import './style.css';

class Dashboard extends Component {

  constructor(props, context) {
    super(props, context);

    this.muse = new MuseClient();
  }

  async handleClick() {
    await this.muse.connect();
    this.muse.start();

    const leftEyeChannel = channelNames.indexOf('AF7');

    this.leftBlinks = this.muse.eegReadings
    .filter(r => r.electrode === leftEyeChannel)
    .map(r => Math.max(...r.samples.map(n => Math.abs(n))))
    .filter(max => max > 500);

    this.leftBlinks.subscribe(value => {
      console.log('Blink!', value);
    });
  }

  render() {
    return (
      <div className="view">
        <button onClick={this.handleClick.bind(this)}>Click Here</button>
        {/*<ViewHeader />*/}
        {/*<ViewContent />*/}
      </div>
    );
  }

}

export default Dashboard;
