import React from "react";
import { Link } from "react-router-dom";

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
        <div className={css.buttons}>
          <Link to="/story">For talents</Link>
          <Link to="/forpartners">For partners</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
