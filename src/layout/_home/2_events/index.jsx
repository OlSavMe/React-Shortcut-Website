import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import SkeletonList from "../../../components/SkeletonList";

// Styles
import css from "./styles.module.scss";

// Children
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await Axios.get(
      "https://www.eventbriteapi.com/v3/users/me/events/?order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW"
    ).then((response) => {
      setEvents(response.data.events);
      setLoading(false);
    });
  };

  return (
    <div className={css.container}>
      <div>
        <header>
          <p>Upcoming events:</p>
        </header>
        {loading && <SkeletonList />}
        {events
          .slice(0, 3)
          .map((event, i) =>
            moment(event.start.local).isBefore() ? (
              <Event key={i} event={event} />
            ) : null
          )}
        <footer>
          <Link to="/events">
            <a href="/">See all events</a>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Events;
