import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import EventsList from "./EventsList";
import Toolbar from "./Toolbar";
import Search from "./Search";
const Events = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>Search events</h2>
      </header>
      <section>
        <p>
          Our activities are based in tech, design, business, and
          entrepreneurship. Through taking part in these activities, you will be
          able to develop and increase your chances of landing a job or scaling
          your business idea.
        </p>{" "}
        <p>
          As a non-profit organization, all our activities are co-designed with
          partner organizations and industry players, given pro bono by
          volunteers who are experts in their own field. Thanks to their
          involvement and support, our activities are open and free to all.
        </p>{" "}
        <p>
          We host specialized training programs in collaboration with industry
          leaders and experts in order to fill the talent gap in the tech
          industry.
        </p>
      </section>
      <Search /> <Toolbar />
      <EventsList />
    </div>
  );
};

export default Events;
