import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import css from "./Contact.module.scss";

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "500px",
    latitude: 60.16723,
    longitude: 24.92175,
    zoom: 12,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/theshortcut/ck8repsqp094u1imyveq7vkk8"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      <Marker latitude={60.16723} longitude={24.92175}>
        <button className={css.marker}>
          <img src={require("../../assets/icons/pin.png")} alt="logo" />
        </button>
      </Marker>
    </ReactMapGL>
  );
}
