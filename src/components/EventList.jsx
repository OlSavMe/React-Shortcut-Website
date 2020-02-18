import React from "react";
import EventListItem from "./EventListItem";
import "./styles/mainStyles.scss";
import "./styles/EventListStyle.scss";

export default function EventList(props) {
  return (
    <div className="event-list">
      <h3>Upcoming events:</h3>
      <div className="inner">
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
      <a>See all events</a>
    </div>
  );
}
