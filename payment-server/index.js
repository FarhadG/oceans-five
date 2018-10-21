const express = require('express');
const paypal = require('paypal-rest-sdk');

const port = 8080;
const app = express();

paypal.configure({
  mode: 'sandbox',
  client_id: 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
  client_secret: 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});

app.get('/paypal', (req, res) => {
  const paymentData = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://return.url",
      "cancel_url": "http://cancel.url"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "item",
          "sku": "item",
          "price": "1.00",
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": "1.00"
      },
      "description": "This is the payment description."
    }]
  };

  paypal.payment.create(paymentData, (error, payment) => {
    if (error) {
      res.json({ success: false });
    }
    else {
      res.json({ success: true, payment });
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));