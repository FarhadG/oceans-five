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
   }

   componentWillUnmount() {
     clearInterval(this.countdown);
   }

   render() {
      const { show } = this.state;
      return (
        <div className="home">
          <Brain color={show? "blue": "grey"}/>
          {!show && <h2 className="welcome">Loading Brain Waves</h2>}
          {show &&
            <div>
              <h2 className="welcome">Welcome</h2>
              <span id='lippButton'></span>
            </div>
          }
        </div>
      )
   }
}

export default Page;
