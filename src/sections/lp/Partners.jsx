import React from "react";
import css from "./Partners.module.scss";

export default class Partners extends React.Component {
  render() {
    return (
      <div className={css.partners}>
        <div className={css.container}>
          <h3>Our partners</h3>

          <div className={css.logos}>
            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_EU-logos-600x424.png"
                alt="partner-logo"
              />
            </div>

            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Helsinki-logo-600x424.png "
                alt="partner-logo"
              ></img>
            </div>

            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Microsoft-logo-600x424.png "
                alt="partner-logo"
              />
            </div>

            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Maria-01-logo-1.png"
                alt="partner-logo"
              ></img>
            </div>

            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Slush-logo-1.png"
                alt="partner-logo"
              />
            </div>

            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Junction-logo.png"
                alt="partner-logo"
              />
            </div>

            <div>
              <img
                src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Wave-Ventures-logo-2.png"
                alt="partner-logo"
              />
            </div>
          </div>
          <a className={css.link} href="/#">
            Become a partner
          </a>
        </div>
      </div>
    );
  }
}
