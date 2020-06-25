import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import Venue from "../../../components/functional/Venue";

const Event = ({ event }) => {
  const start = event.start.local;
  const end = event.end.local;
  const title = event.name.text;
  const summary = event.summary;
  const online = event.online_event;
  const venue = event.venue_id;
  const link = event.url;
  const img = event.logo.original.url;

  // date
  const formatDate = (e) => {
    const date = new Date(e);
    const eventDate = date.getDate();
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
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
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
    <div className={css.event}>
      <aside>
        <p>{formatDay(start)}</p>
        <p>{formatDate(start)}</p>
        <p>{formatMonth(start)}</p>
      </aside>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <p className={css.date}>
          <span>
            {formatMonth(start)}, {formatDate(start)}
          </span>{" "}
          <span>
            @ {formatTime(start)} - {formatTime(end)}
          </span>{" "}
        </p>
        <p className={css.title}>{title}</p>
        <p className={css.summary}>{formatText(summary)}</p>

        {venue ? (
          <Venue id={venue} />
        ) : (
          <p className={css.online}>{online ? "Online" : null}</p>
        )}

        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more +
        </a>
      </div>
    </div>
  );
};

export default Event;
