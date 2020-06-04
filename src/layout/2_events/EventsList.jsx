import React, { useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "../../components/functional/Pagination";
import SkeletonEvents from "../../components/SkeletonEvents";
// Styles
import css from "./styles.module.scss";

// Children
import Event from "./Event";

const EventsList = ({ search }) => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const getEvents = async () => {
    await Axios.get(
      "https://www.eventbriteapi.com/v3/users/me/events/?&order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW"
    )
      .then((response) => {
        console.log(response.status);
        setEvents(response.data.events);
        console.log(response.data.events);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const previousButton = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextButton = () => {
    setCurrentPage(currentPage + 1);
  };

  let filterEvents = events.filter((event) =>
    event.name.text.toLowerCase().includes(search.toLowerCase())
  );

  const paginate = (number) => setCurrentPage(number);
  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  const currentItems = filterEvents.slice(firstItem, lastItem);
  const totalItems = filterEvents.length;

  return (
    <div className={css.list}>
      {filterEvents.length === 0 ? (
        <p className="">No searches found... </p>
      ) : (
        <div>
          <Pagination
            perPage={perPage}
            totalItems={totalItems}
            paginate={paginate}
            currentPage={currentPage}
            previousButton={previousButton}
            nextButton={nextButton}
          />
          {loading && <SkeletonEvents />}
          {currentItems.map((event, index) => (
            <Event key={index} event={event} />
          ))}
          <Pagination
            perPage={perPage}
            totalItems={totalItems}
            paginate={paginate}
            currentPage={currentPage}
            previousButton={previousButton}
            nextButton={nextButton}
          />
        </div>
      )}
    </div>
  );
};

export default EventsList;
