import React, { useState, useEffect } from "react";
import "./styles/mainStyles.scss";
import "./styles/EventListItemStyle.scss";

// Placeholder image:
//<img src={require(".././assets/placeholder-image.jpg")} />

export default function EventListItem(props) {
  return (
    <div className="event-list-item">
      <div className="image">
        <p>
          <span>Feb</span>
          12
        </p>
      </div>
      <div className="text">
        <h3>Activity title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          aspernatur! Ad recusandae consequatur quia itaque similique.
        </p>
        <button>Register</button>
      </div>
    </div>
  );
}
