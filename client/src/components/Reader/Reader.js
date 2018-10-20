import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import './Reader.scss';

class Reader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      delay: 300,
      data: null
    };
  }

  handleScan = (data) => {
    this.setState({ data });
  };

  handleError(err) {
    console.error(err);
  }

  render() {
    const { data, delay } = this.state;

    return (
      <div className="Reader">
        {data && <p>{data}</p>}
        <QrReader
          delay={delay}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }

}

export default Reader;