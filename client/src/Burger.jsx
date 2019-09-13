import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './burger.css';

export default class Burger extends React.Component {
  showSettings(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <Menu right noOverlay>
        {this.props.currentUser &&
          <a id="hi" className="menu-item" href="/">Hi, {this.props.currentUser.username}</a>}
        {this.props.currentUser && (this.props.currentUser.username === "sara" &&
          <div id="home" className="menu-item" onClick={this.props.todashboardView}>Dashboard</div>)}
        <div id="about" className="menu-item" onClick={this.props.logout}>Logout</div>
        <a id="about" className="menu-item" href="/about">Trends</a>
        <a id="contact" className="menu-item" href="/contact">Messages</a>
        <a onClick={this.showSettings} className="menu-item--small" href="/stuff">Stuff</a>
      </Menu>
    );
  }
}