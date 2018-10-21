import React, { Component } from 'react';

import './styles/home.css';
import mind from '../mind';
import { changePage } from '../helpers';

class BasePage extends Component {

  constructor(props, next) {
    super(props);
    this.next = next;

    this.state = {
      answer: false
    }
  }

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
        }
      }
    })()
  }
}

export default BasePage;
