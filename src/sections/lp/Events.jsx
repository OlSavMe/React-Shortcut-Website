import React, { useEffect } from "react";
import css from "./Events.module.scss";
import Axios from "axios";

export default function Events() {
  const [events, setEvents] = React.useState([]);
  const URL = "https://theshortcut.org/wp-json/wp/v2/events/?per_page=6";

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await Axios.get(URL)
      .then(response => response.data)
      .then(data => {
        setEvents(data);
      });
  };

  // const today = new Date();
  // const getTomorrow = () => {
  //   const tomorrow = new Date();
  //   tomorrow.setDate(tomorrow.getDate() + 1); // even 32 is acceptable
  //   return `${tomorrow.getFullYear()}/${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
  // }

  const formatDate = e => {
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
      "December"
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dateParts = e.split("/");
    const d = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    console.log(d);
    const date = d.getDate();
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const formatted = `${dayName}, ${date} ${monthName}`;
    console.log(formatted);
    return formatted;
  };

  const formatTime = e => {
    const t = e.slice(0, -3);
    return t;
  };

  return (
    <div className={css.events}>
      <h3 className={css.heading}>Upcoming events</h3>

      <div className={css.container}>
        {events.map((event, i) => (
          <div key={i} className={css.event}>
            <div className={css.visual}>
              <img src={event.acf.image.url} alt="event" />
            </div>
            <div className={css.info}>
              <div className={css.text}>
                <p className={css.date}>
                  {formatDate(event.acf.date_start)}{" "}
                  {formatTime(event.acf.time_start)}{" "}
                  {formatTime(event.acf.time_end)}{" "}
                </p>
                <h4 className={css.title}>{event.acf.title}</h4>
                <p className={css.description}>{event.acf.description}</p>
                <p className={css.address}>{event.acf.location}</p>
              </div>
              <div className={css.btn}>
                <a className={css.link} href={event.acf.register}>
                  Learn more{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a className={css.link} href="/#">
        See all events
      </a>
    </div>
  );
}
