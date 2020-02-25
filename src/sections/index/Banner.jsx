import React from "react";
// Stylesheets
import "./stylesheets/BannerStyles.scss";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="inner">
          <h1>The Shortcut</h1>
          <h3>Accelerating your entrance into the startup world</h3>
          <a href="/#">Our Story</a>
        </div>
      </div>
    );
  }
}
