import React from "react";

// Styles
import css from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div>
        <h1>The Shortcut</h1>
        <h2>
          Accelerating talent through tech startups & high growth companies
        </h2>
        <p>
          We equip talent with the skills and networks they need to become an
          entrepreneur or work for a high-growth company/startup.
        </p>
        <div className={css.buttons}>
          <a href="/">For talents</a>
          <a href="/">For partners</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
