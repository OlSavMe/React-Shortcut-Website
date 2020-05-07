import React from "react";

// Styles
import css from "./styles.module.scss";

const Partners = () => {
  return (
    <div className={css.container}>
      <p>Our partners</p>
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
      <a href="/#">Work with us</a>
    </div>
  );
};

export default Partners;
