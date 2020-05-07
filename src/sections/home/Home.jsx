import React from "react";
import Hero from "./1_hero/Hero.jsx";
import Events from "./2_events/Events.jsx";
import Partners from "./3_partners/Partners.jsx";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Events />
        <Partners />
      </div>
    );
  }
}
