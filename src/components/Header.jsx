import React, { Component } from "react";
import "./stylesheets/HeaderStyles.scss";

export class Header extends Component {
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <h4>{this.props.subtitle}</h4>
      </header>
    );
  }
}

export default Header;
