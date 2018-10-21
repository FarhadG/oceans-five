import React from 'react';
import Brain from '../components/brain/brain';
import PayPal from '../images/paypal.png'

import BasePage from './BasePage';
import { getColor } from '../helpers';
import './styles/home.css';

export default class Page extends BasePage {

  constructor(props) {
    super(props);
  }

  render() {
    const { answer } = this.state;
    return (
      <div className="home">
        <Brain color={getColor(answer)} />
        {!answer && <h2 className="welcome">Babak requests $123.00. Do you accept?</h2>}
        {answer && <h2 className="welcome">{answer}</h2>}
        <img className="paypal-logo huge" alt=""src={PayPal}/>
      </div>
    )
  }
}
