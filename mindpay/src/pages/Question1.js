import React, { Component } from 'react';
import Brain from '../components/brain/brain';
import { changePage } from '../helpers';

import './styles/home.css';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ show: true }), 5000);
    this.interval = setInterval(() => changePage("/question/2"), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  render() {
    const { show } = this.state;
    return (
      <div className="home">
        <Brain color={show ? "green" : "grey"} />
        {!show && <h2 className="welcome">Do you want to pay your AT&T Bill for $134.00?</h2>}
        {show && <h2 className="welcome">Yes</h2>}
      </div>
    )
  }
}

export default Page;
