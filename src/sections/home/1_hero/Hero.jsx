import React from "react";

// Styles
import css from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div>
        <h1>The Shortcut</h1>
        <h2>Accelerating your entry into the startup world</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
          magnam, facilis, quos, unde ea magni in est eum porro blanditiis enim.
        </p>
        <div className={css.buttons}>
          <a href="/">Join us</a>
          <a href="/">Work with us</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
