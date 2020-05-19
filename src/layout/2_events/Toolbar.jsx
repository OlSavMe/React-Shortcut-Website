import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import Search from "./Search";

const Toolbar = () => {
  return (
    <div className={css.toolbar}>
      <ul>
        <li>
          <Search />
        </li>
        <li>Workshops</li>
        <li>Trainings</li>
        <li>Certifications</li>
        <li>Clubs</li>
      </ul>
      <ul>
        <li>#mystartupdebut</li>
        <li>#python</li>
        <li>#talentheist</li>
        <li>#schoolofstartups</li>
      </ul>
    </div>
  );
};

export default Toolbar;
