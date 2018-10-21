import React, { Component } from 'react';
import { changePage } from '../helpers';
import PayPal from '../images/paypal.png'

import './styles/Auth.css';

class Page extends Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: false
      }
      this.payPalLogin = this.payPalLogin.bind(this);
    }

    payPalLogin() {
      this.setState({loading: true})
      this.interval = setTimeout(() => changePage("/home"), 3000);
    }

     render() {
        const { loading } = this.state;
        return (
          <div className="auth">
            <h1>Mind Pay</h1>
            <button disabled={loading} onClick={this.payPalLogin} className="pay-pal-button"><img className="pay-pal-logo" alt=""src={PayPal}/>Log in</button>
            <div className="loading">{loading && <img className="pay-pal-logo bigger" alt=""src={PayPal}/>}</div>
            <p className="login-description">Currently Supporting Paypal & Visa</p>
          </div>
        )
     }
}

export default Page;
