import React, { Component } from 'react';
import Brain from '../components/brain/brain';

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
   }

   componentWillUnmount() {
     clearInterval(this.countdown);
   }

   render() {
      const { show } = this.state;
      return (
        <div className="home">
          <Brain color={show? "green": "grey"}/>
          {!show && <h2 className="welcome">Babek requests $123.00. Do you accept?</h2>}
          {show && <h2 className="welcome">Yes</h2>}
        </div>
      )
   }
}

export default Page;
