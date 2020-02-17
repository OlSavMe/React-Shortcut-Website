import React from "react";
import "./styles/mainStyles.scss";
import "./styles/partnersStyles.scss";
import LogoContainer from "./LogoContainer";

export default class Partners extends React.Component {
  render() {
    return (
      <div className="partners">
        <h3>Our partners</h3>
        <LogoContainer />
        <a href="#">Become a partner</a>
      </div>
    );
  }
}
