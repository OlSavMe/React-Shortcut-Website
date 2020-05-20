import React, { useState, useEffect } from "react";
import Axios from "axios";

// Styles
import css from "./styles.module.scss";

// Children
import Event from "./Event";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await Axios.get(
      "https://www.eventbriteapi.com/v3/users/me/events/?order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW"
    ).then((response) => {
      setEvents(response.data.events);
    });
  };

  return (
    <div className={css.list}>
      {events.slice(0, 10).map((event, i) => (
        <Event key={i} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
