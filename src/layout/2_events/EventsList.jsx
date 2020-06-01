import React, { useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "../../components/functional/Pagination";

// Styles
import css from "./styles.module.scss";

// Children
import Event from "./Event";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await Axios.get(
      "https://www.eventbriteapi.com/v3/users/me/events/?order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW"
    )
      .then((response) => {
        console.log(response.status);
        setEvents(response.data.events);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const previousButton = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextButton = () => {
    setCurrentPage(currentPage + 1);
  };

  const paginate = (number) => setCurrentPage(number);
  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  const currentItems = events.slice(firstItem, lastItem);
  const totalItems = events.length;

  return (
    <div className={css.list}>
      <Pagination
        perPage={perPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
        previousButton={previousButton}
        nextButton={nextButton}
      />
      <div className="row">
        {currentItems.map((event, index) => {
          return <Event key={index} event={event} />;
        })}
      </div>
      {/* 
      {currentItems.map((event, index) => (
        <Event key={index} event={event} />
      ))} */}
      <Pagination
        perPage={perPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
        previousButton={previousButton}
        nextButton={nextButton}
      />
    </div>
  );
};

export default EventsList;
