import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import EventsList from "./EventsList";

const Events = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>Search events</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, velit
          ipsum quae aspernatur porro omnis cupiditate corporis rerum doloremque
          molestias expedita eligendi animi veritatis deleniti.
        </p>
      </header>
      <div className={css.toolbar}>
        <ul>
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
      <EventsList />
    </div>
  );
};

export default Events;
