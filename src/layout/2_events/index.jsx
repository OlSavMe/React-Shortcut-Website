import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import EventsList from "./EventsList";
import Toolbar from "./Toolbar";

const Events = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>
          Our events
          <span>Find yours and register now!</span>
        </h2>
        <div>
          <img
            src={require("../../assets/illustrations/search.png")}
            alt="illustration"
          />
        </div>
      </header>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore
          ducimus non praesentium aspernatur rerum laborum perspiciatis vel,
          dolorum dolorem sed ad, explicabo vero, dolores tenetur asperiores
          reiciendis minus odit.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore
          ducimus non praesentium aspernatur rerum laborum perspiciatis vel,
          dolorum dolorem sed ad, explicabo vero, dolores tenetur asperiores
          reiciendis minus odit.
        </p>
      </section>
      <h3>Search events</h3>
      <Toolbar />
      <EventsList />
    </div>
  );
};

export default Events;
