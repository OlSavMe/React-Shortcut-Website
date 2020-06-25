import React from "react";
import Event from "./Event";

const Items = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {items.map((event, i) => (
        <Event key={i} event={event} />
      ))}
    </>
  );
};

export default Items;
