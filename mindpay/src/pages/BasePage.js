import axios from 'axios';
import React, { Component } from 'react';
import mind from '../mind';
import { changePage } from '../helpers';

import './styles/home.css';

export default class BasePage extends Component {

  constructor(props, next) {
    super(props);
    this.next = next;

    this.state = {
      answer: false
    };

  }

  submitPaymentPayPal = () => {
    return axios
    .post('http://127.0.0.1:8080/paypal')
    .then(console.log)
    .catch(console.error);
  };

  componentDidMount() {
    let
      self = this,
      count = 0,
      answer = mind.state;

    this.setState({ answer: false });

    (function checkAnswer() {
      answer = answer || mind.state;
      count++;

      if (count < 5) {
        setTimeout(checkAnswer, 1000);
      }
      else {
        self.setState({ answer: answer ? 'Yes' : 'No' });
        if (self.next) {
          setTimeout(() => changePage(`/question/${self.next}`), 2000);
        } else {
          self.submitPaymentPayPal()
        }
      }
    })()
  }
}
