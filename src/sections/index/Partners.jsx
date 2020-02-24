import React from "react";
// Stylesheets
import "./stylesheets/PartnersStyles.scss";

export default class Partners extends React.Component {
  render() {
    return (
      <div className="partners-bg">
        <div className="partners">
          <h3>Our partners:</h3>
          <div className="logo-container">
            <div className="logo">
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_EU-logos-600x424.png"
                alt="partner-logo"
              />
            </div>
            <div className="logo">
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Helsinki-logo-600x424.png "
                alt="partner-logo"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Microsoft-logo-600x424.png "
                alt="partner-logo"
              />
            </div>
            <div className="logo">
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_EU-logos-600x424.png"
                alt="partner-logo"
              />
            </div>
            <div className="logo">
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Helsinki-logo-600x424.png "
                alt="partner-logo"
              ></img>
            </div>
            <div className="logo">
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Microsoft-logo-600x424.png "
                alt="partner-logo"
              />
            </div>
          </div>
          <a href="/#">Become a partner</a>
        </div>
      </div>
    );
  }
}
