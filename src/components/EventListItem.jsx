import React from "react";
import "./styles/mainStyles.scss";

export default function EventListItem(props) {
  return (
    <div className="event-list-item">
      <div className="image">
        <img src={require(".././assets/placeholder-image2.png")} />
      </div>
      <div className="text">
        <p className="date">Thurs, 12 March, 17:30-19:30</p>
        <h3>My Startup Debut</h3>
        <p className="address">
          The Shortcut Lab, <br />
          Lapinlahdenkatu 16 (Entrance 15B), Helsinki
        </p>
      </div>
    </div>
  );
}
