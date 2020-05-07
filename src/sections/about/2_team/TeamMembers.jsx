import React, { useState, useEffect } from "react";
import Axios from "axios";

// Styles
import css from "./styles.module.scss";

// Children
import Profile from "./Profile";

const TeamMembers = () => {
  const [teammates, setTeammates] = useState([]);
  const URL = "https://theshortcut.org/wp-json/wp/v2/team/?per_page=100";

  useEffect(() => {
    getTeammates();
  }, []);

  const getTeammates = async () => {
    Axios.get(URL).then((response) => {
      setTeammates(response.data);
    });
  };

  return (
    <div className={css.team}>
      {teammates.reverse().map((person, i) => (
        <Profile key={i} {...person} />
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
};

export default TeamMembers;
