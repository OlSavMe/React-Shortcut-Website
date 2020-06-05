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

  const url =
    "https://www.eventbriteapi.com/v3/users/me/events/?&order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW";

  const getEvents = async () => {
    await Axios.get(url).then((response) => {
      let pages = response.data.pagination.page_count;
      const promises = [];

      for (let page = 1; page <= pages; page++) {
        promises.push(
          Axios({
            method: "get",
            url: `https://www.eventbriteapi.com/v3/users/me/events/?&order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW&page=${page}`,
          })
        );
      }

      Axios.all(promises).then((responses) => {
        const processedResponses = [];
        responses.map((response) => {
          processedResponses.push(response.data.events);
          return processedResponses;
        });
        console.log(processedResponses);
        let result = [];

        processedResponses.map((x) => {
          result = result.concat(x);
          return result;
        });
        setEvents(result);
        setLoading(false);
      });
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

  const filterEvents = events.filter(
    (event) =>
      String(event.name.text).toLowerCase().includes(search.toLowerCase()) ||
      String(event.summary).toLowerCase().includes(search.toLowerCase())
  );

  const paginate = (number) => setCurrentPage(number);
  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  const currentItems = filterEvents.slice(firstItem, lastItem);
  const totalItems = filterEvents.length;

  return loading ? (
    <div className={css.list}>
      <SkeletonEvents />
    </div>
  ) : (
    <div className={css.list}>
      {filterEvents.length === 0 ? (
        <p className="">No matching events... </p>
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
