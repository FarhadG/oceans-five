import React from 'react';
import Brain from '../components/brain/brain';
import Visa from '../images/visa.png'

import BasePage from './BasePage';
import { getColor } from '../helpers';
import './styles/home.css';

export default class Page extends BasePage {

  constructor(props) {
    super(props, 2);
  }

  render() {
    const { answer } = this.state;
    return (
      <div className="home">
        <Brain color={getColor(answer)} />
        {!answer && <h2 className="welcome">Do you want to pay your AT&T Bill for $134.00?</h2>}
        {answer && <h2 className="welcome">{answer}</h2>}
        <img className="visa-logo" alt=""src={Visa}/>
      </div>
    )
  }
}
