import React, { Component } from "react";
import "./styles/mainStyles.scss";
import "./styles/logoContainerStyles.scss";

// Reusable flex container for logos, icons, etc.
export class LogoContainer extends Component {
  render() {
    return (
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_EU-logos-600x424.png"
            alt=""
          />
        </div>
        <div className="logo">
          <img src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Helsinki-logo-600x424.png "></img>
        </div>
        <div className="logo">
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Microsoft-logo-600x424.png "
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default LogoContainer;
