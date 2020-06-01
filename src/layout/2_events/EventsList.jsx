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

  const [searchWord, setSearchWord] = useState("order_by=start_desc");
  
  useEffect(() => {
    getEvents();
  }, [search]);

  const getEvents = async () => {
    if (search) {
      setSearchWord("name_filter=" + search + "&time_filter=current_future");
    }

    await Axios.get(
      `https://www.eventbriteapi.com/v3/users/me/events/?` +
        searchWord +
        `&token=AZNI42XD3WB4DJ5MPNSW`
    )
      .then((response) => {
        console.log(response.status);
        setEvents(response.data.events);
        setLoading(false);
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
  );
};

export default EventsList;
