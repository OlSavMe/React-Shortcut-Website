import React from "react";
import "./styles/mainStyles.scss";
import "./styles/bannerStyles.scss";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="inner">
          <h1>The Shortcut</h1>
          <h3>Accelerating your entrance into the startup world</h3>
          <a href="www.google.com">Our Story</a>
        </div>
      </div>
    );
  }
}
