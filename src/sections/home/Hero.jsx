import React from "react";
import { Link } from "react-router-dom";
import css from "./Hero.module.scss";

export default class Hero extends React.Component {
  render() {
    return (
      <div className={css.hero}>
        <div className={css.text}>
          <h1>The Shortcut</h1>
          <h3>Accelerating your entrance into the startup world</h3>
          <Link to="/story">
            <a href="/#">Our story</a>
          </Link>
        </div>
      </div>
    );
  }
}