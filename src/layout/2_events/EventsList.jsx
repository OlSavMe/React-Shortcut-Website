import React, { useState, useEffect } from "react";
import Axios from "axios";
import Items from "./Items";
import Pagination from "../../components/functional/Pagination";

// Styles
import css from "./styles.module.scss";

// Children
import Event from "./Event";

const EventsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await Axios.get(
      "https://www.eventbriteapi.com/v3/users/me/events/?order_by=start_desc&token=AZNI42XD3WB4DJ5MPNSW"
    )
      .then((response) => {
        console.log(response.status);
        setItems(response.data.events);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={css.list}>
      <Items items={currentItems} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
      {/* {events.slice(0, 10).map((event, i) => (
        <Event key={i} event={event} />
      ))} */}
    </div>
  );
};

export default EventsList;
