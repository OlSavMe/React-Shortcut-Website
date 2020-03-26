import React, { useEffect } from "react";

// Stylesheets
import css from "./Team.module.scss";

import Axios from "axios";

export default function Teammates() {
  const [teammates, setTeammates] = React.useState([]);
  const URL = "https://theshortcut.org/wp-json/wp/v2/team/?per_page=100";

  useEffect(() => {
    getTeammates();
  }, []);

  const getTeammates = async () => {
    await Axios.get(URL).then(response => {
      setTeammates(response.data);
    });
  };

  const reversed = [];
  const length = teammates.length;
  for (let i = length - 1; i >= 0; i--) {
    reversed.push(teammates[i]);
  }

  return (
    <div className={css.teammates}>
      {reversed.map((teammate, i) => (
        <div key={i} className={css.card}>
          <img src={teammate.acf.image} alt="teammate" />

          <div className={css.info}>
            <h4>{teammate.acf.name}</h4>
            <p>{teammate.acf.position}</p>

            <div className={css.links}>
              <a href={`mailto:${teammate.acf.email}`}>
                <img
                  src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
                  alt="mail-icon"
                ></img>
              </a>
              <a href={teammate.acf.linkedin}>
                {" "}
                <img
                  src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
                  alt="linkedin-icon"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
}
