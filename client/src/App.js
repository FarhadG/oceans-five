import React from 'react';
import Nav from './components/nav';
import SiteHead from './components/header';

import './app.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { navMini: false }
  }

  toggleNav = (e) => {
    e.preventDefault();
    this.setState({ navMini: !this.state.navMini });
  };

  hideNav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ navMini: false })
  };

  render() {
    const { navMini } = this.state;
    return (
      <div className="app-wrapper">
        <Nav mini={navMini} toggleNav={this.toggleNav} />
        <div className={`content-container ${navMini ? 'full' : ''}`}>
          {/* dropshadow for mobile nav triggering */}
          <div className="menu-dropshadow" style={{ display: (navMini ? 'block' : 'none') }}
               onClick={this.hideNav}></div>
          <SiteHead toggleNav={this.toggleNav} />
          {this.props.children}
        </div>
      </div>
    )
  }
}
