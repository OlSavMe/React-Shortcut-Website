import React, { useState, useEffect } from "react";
import Axios from "axios";

// Styles
import css from "./styles.module.scss";

// Children
import { Venue } from "../../../components/index";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await Axios.get(
      "https://www.eventbriteapi.com/v3/users/me/events/?order_by=created_desc&token=AZNI42XD3WB4DJ5MPNSW"
    ).then((response) => {
      setEvents(response.data.events);
    });
  };

  // date
  const formatDate = (e) => {
    const date = new Date(e);
    const eventDate = date.getDay();
    return eventDate;
  };

  // time
  const formatTime = (e) => {
    const date = new Date(e);
    const eventTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return eventTime;
  };

  // day
  const formatDay = (e) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const date = new Date(e);
    const eventDay = days[date.getDay()].substring(0, 3);
    return eventDay;
  };

  // month
  const formatMonth = (e) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(e);
    const eventMonth = months[date.getMonth()];
    return eventMonth;
  };

  // month
  const formatText = (e) => {
    const eventText = e + " ...";
    return eventText;
  };

  return (
    <div>
      {events.slice(0, 3).map((event, i) => (
        <div className={css.container} key={i}>
          <aside>
            <p>{formatDay(event.start.local)}</p>
            <p>{formatDate(event.start.local)}</p>
            <p>{formatMonth(event.start.local)}</p>
          </aside>
          <div>
            <p className={css.date}>
              <span>
                {formatMonth(event.start.local)},{" "}
                {formatDate(event.start.local)}
              </span>{" "}
              <span>
                @ {formatTime(event.start.local)} -{" "}
                {formatTime(event.end.local)}
              </span>{" "}
              <p>{event.online_event ? "Online" : null}</p>
            </p>
            <p className={css.title}>{event.name.text}</p>
            <p className={css.text}>{formatText(event.summary)}</p>
            <p>{event.venue_id ? <Venue id={event.venue_id} /> : null}</p>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              Learn more +
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
