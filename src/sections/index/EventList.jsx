import React from "react";
import EventListItem from "./EventListItem";

import "./stylesheets/EventListStyles.scss";

export default function EventList(props) {
  return (
    <div className="event-list">
      <h3>Upcoming events:</h3>
      <div>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
      <a href="/#">See all events</a>
    </div>
  );
}
