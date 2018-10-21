import React, { Component } from 'react';

import mind from '../mind';
import Brain from '../components/brain/brain';
import { changePage } from '../helpers';
import './styles/home.css';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      connecting: false,
      connected: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 5000);
  }

  connectBrain = (e) => {
    e.preventDefault();
    this.setState({ connecting: true });
    mind.connect()
    .then(() => {
      this.setState({ connecting: false, connected: true });
      setTimeout(() => {
        this.setState({ show: true });
        changePage('/question/1');
      }, 2000);
    });
  };

  render() {
    const { show, connecting, connected } = this.state;
    return (
      <div className="home">
        <Brain color={connected ? "blue" : "grey"} />
        {!show && <h2 className="welcome">Loading Brain Waves</h2>}
        {show && <h2 className="welcome">Welcome</h2>}
        {show && connecting && !connected && <h2 className="welcome">Connecting...</h2>}
        {show && !connecting && connected && <h2 className="welcome">Mind Connected</h2>}
        {show && !connecting && !connected && <button onClick={this.connectBrain}>Connect Mind</button>}
      </div>
    )
  }
}

export default Page;
