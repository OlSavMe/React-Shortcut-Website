import React, { Component } from "react";

// Stylesheets
import "./stylesheets/OurTeamStyles.scss";

export class Teammate extends Component {
  render() {
    return (
      <div>
        <img
          src="https://theshortcut.org/wp-content/uploads/2019/09/Our-Team-aug19_Anne.png"
          alt="teammate"
        />

        <div className="text">
          <h4>Anne Badan</h4>
          <p>Co-founder & CEO</p>
        </div>

        <div className="social-links">
          <div>
            <img
              src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
              alt="mail-icon"
            ></img>
          </div>
          <div>
            {" "}
            <img
              src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
              alt="linkedin-icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Teammate;
