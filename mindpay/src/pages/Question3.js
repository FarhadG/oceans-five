import React, { Component } from 'react';
import Brain from '../components/brain/brain';

import './styles/home.css';
import mind from '../mind';
import { changePage } from '../helpers';

const getColor = state => ({
  'Yes': 'green',
  'No': 'red'
}[state] || 'grey');

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: false
    }
  }

  componentDidMount() {
    let
      self = this,
      count = 0,
      answer = mind.state;

    (function checkAnswer() {
      answer = answer || mind.state;
      count++;
      if (count < 5) {
        setTimeout(checkAnswer, 1000);
      }
      else {
        self.setState({ answer: answer ? 'Yes' : 'No' });
        setTimeout(() => changePage('/question/3'), 2000);
      }
    })()
  }

  render() {
    const { answer } = this.state;
    return (
      <div className="home">
        <Brain color={getColor(answer)} />
        {!answer && <h2 className="welcome">Babak requests $123.00. Do you accept?</h2>}
        {answer && <h2 className="welcome">{answer}</h2>}
      </div>
    )
  }
}

export default Page;
