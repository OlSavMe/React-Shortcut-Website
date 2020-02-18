import React, { useState, useEffect } from "react";

import EventListItem from "./EventListItem";
import "./styles/EventListStyle.scss";

export default function EventList(props) {
  return (
    <div className="event-list">
      <EventListItem />
      <EventListItem />
      <EventListItem />
    </div>
  );
}
