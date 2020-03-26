import React from "react";

export default function EventListItem(props) {
  return (
    <div className="event-list-item">
      <div className="image">
        <img
          src={require("../../assets/placeholder-image2.png")}
          alt="activity-visual"
        />
      </div>
      <div className="text">
        <p className="date">Thu, 12 March 17:30-19:30</p>
        <h3>My Startup Debut</h3>
        <p className="address">
          The Shortcut Lab, <br />
          Lapinlahdenkatu 16 (Entrance 15B), Helsinki
        </p>
        <button>register</button>
      </div>
    </div>
  );
}
