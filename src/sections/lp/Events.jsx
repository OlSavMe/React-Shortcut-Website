import React from "react";
import Event from "./Event";

import css from "./Events.module.scss";

export default function Events(props) {
  return (
    <div className={css.events}>
      <div className={css.container}>
        <h3 className={css.heading}>Upcoming events</h3>
        <div>
          <Event />
          <Event />
          <Event />
        </div>
        <a className={css.link} href="/#">
          See all events
        </a>
      </div>{" "}
    </div>
  );
}
