import React, { useEffect } from "react";
import "./stylesheets/EventListStyles.scss";
<<<<<<< Updated upstream
import css from "./Events.module.scss";
import Axios from 'axios';

export default function EventList() {
=======
import Axios from 'axios';

export default function EventList() {
  const [startDate, setStartDate] = React.useState([]);
>>>>>>> Stashed changes
  const [events, setEvents] = React.useState([]);
  const URL =
    "https://theshortcut.org/wp-json/wp/v2/events/?per_page=100";


  useEffect(() => {
    getEvents(); // eslint-disable-next-line

  }, []);


  const getEvents = async () => {
    await Axios.get(URL)
      .then(response => response.data)
      .then(data => {
        setEvents(data);


      });
  };


  const formatDate = (e) => {

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const days = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]

    const dateParts = e.split("/");
    const d = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    console.log(d);
    const date = d.getDate()
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()]
    const formatted = `${dayName}, ${date} ${monthName}`;
    console.log(formatted);
    return (formatted);

  };


  const formatTime = (e) => {

    const t = e.slice(0, -3)
    return (t);




  }


  return (
<<<<<<< Updated upstream
    <div className={css.events}>
      <h3 className={css.heading}>UPCOMING EVENTS</h3>
      <div className={css.container}>
        {events.map((event, i) => (
          <div key={i} className={css.event}>
            <div className={css.event}>
=======
    <div className="event-list">
      <h3>UPCOMING EVENTS</h3>
      <div className='eventcontainer'>
        {events.map((event, i) => (
          <div key={i} className="event-list-item">
            <div className="image">
>>>>>>> Stashed changes
              <img
                src={event.acf.image.url}
                alt="event"
              />
            </div>
<<<<<<< Updated upstream
            <div className={css.info}>
              <p className={css.date}>{formatDate(event.acf.date_start)} {formatTime(event.acf.time_start)} {formatTime(event.acf.time_end)} </p>
              <h4 className={css.title}>{event.acf.title}</h4>
              <p className={css.description}>{event.acf.description}</p>
              <p className={css.address}>
                {event.acf.location}
              </p>
              <a className={css.link} href={event.acf.register}>
                Learn more
        </a>
            </div>
          </div>))}
      </div>
      <a className={css.link} href="/#">See all events</a>
=======
            <div className="text">
              <p className="date">{formatDate(event.acf.date_start)} {formatTime(event.acf.time_start)} {formatTime(event.acf.time_end)} </p>
              <h3>{event.acf.title}</h3>
              <p>{event.acf.description}</p>
              <p className="address">
                {event.acf.location}
              </p>
            </div>
          </div>))}
      </div>
      <a href="/#">See all events</a>
>>>>>>> Stashed changes
    </div >
  );
}

