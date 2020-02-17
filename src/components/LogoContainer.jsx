import React, { Component } from "react";
import "./styles/mainStyles.scss";
import "./styles/logoContainerStyles.scss";

// Reusable flex container for logos, icons, etc.
export class LogoContainer extends Component {
  render() {
    return (
      <div className="logo-container">
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
        <div className="logo">
          <img src={require("../assets/shortcut-logo.png")} alt="" />
        </div>
      </div>
    );
  }
}

export default LogoContainer;
