import React, { useState, useEffect } from "react";
import Axios from "axios";

const Venue = (props) => {
  const [venue, setVenue] = useState({});
  const [address, setAddress] = useState({});
  const id = props.id;

  useEffect(() => {
    getVenue(); // eslint-disable-line
  }, {});

  const getVenue = async () => {
    await Axios.get(
      `https://www.eventbriteapi.com/v3/venues/${id}/?token=AZNI42XD3WB4DJ5MPNSW`
    ).then((response) => {
      setVenue(response.data);
      setAddress(response.data.address);
    });
  };

  return (
    <div>
      {venue.name === "Online event" ? null : (
        <div>
          {" "}
          {venue.name ? (
            <p>
              Location: {venue.name}
              {", "}
              {address.localized_address_display}{" "}
            </p>
          ) : (
            <p>Location: {address.localized_address_display} </p>
          )}
        </div>
      )}
    </div>
  );
};
export default Venue;
