import React, { Component } from 'react';
import mind from '../mind';
import { changePage } from '../helpers';

import './styles/home.css';

var paypal = require('paypal-rest-sdk');

class BasePage extends Component {

  constructor(props, next) {
    super(props);
    this.next = next;

    this.state = {
      answer: false
    }
    this.submitPaymentPayPal = this.submitPaymentPayPal.bind(this);
  }

  submitPaymentPayPal() {
    paypal.configure({
      'mode': 'sandbox', //sandbox or live
      'client_id': 'ASXRmwdmW2zos1V3w1z50p2_wxEd212rHfBCJ6ltdEYIOkDMY1c7pMQBPra1w4NHvcxxLmPArf2kym7N',
      'client_secret': 'EF3Rrfl-AuboqCi_H9mh4QsQPCtvXuUVl_AcuvqQtLmRopH64yUjjxjavCe8ZO6GOuEwwxKx1asCER1F'
    });

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "135.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "135.00"
            },
            "description": "This is the payment description."
        }]
    };


    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
        }
    });
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
        } else {
          self.submitPaymentPayPal()
        }
      }
    })()
  }
}

export default BasePage;
