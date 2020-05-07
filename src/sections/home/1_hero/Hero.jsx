import React from "react";

// Styles
import css from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div>
        <h1>The Shortcut</h1>
        <h2>Accelerating your entry into the startup world</h2>
        <div>
          <button>Join us</button>
          <button>Work with us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
