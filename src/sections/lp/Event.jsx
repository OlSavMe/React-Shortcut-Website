import React from "react";
import css from "./Events.module.scss";

export default function Event(props) {
  return (
    <div className={css.event}>
      <div className={css.visual}>
        <img
          src={require("../../assets/placeholder-image2.png")}
          alt="activity-visual"
        />
      </div>
      <div className={css.info}>
        <p className={css.date}>Thu, 12 March 17:30-19:30</p>
        <h4 className={css.title}>My Startup Debut</h4>
        <p className={css.description}>
          The Shortcut's peer coding club resumes with an exciting new format
          being hosted by different community partner companies every month.
          This month, the club's hosting partner is Anders Innovations.
        </p>
        <p className={css.address}>
          The Shortcut Lab, <br />
          Lapinlahdenkatu 16 (Entrance 15B), Helsinki
        </p>
        <a className={css.link} href="/#">
          Learn more
        </a>
      </div>
    </div>
  );
}
