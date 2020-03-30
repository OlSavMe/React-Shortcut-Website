import React from "react";
import { Nav, Footer } from "../../components/index.jsx";
import Hero from "./Hero.jsx";
import Events from "./Events.jsx";
import Partners from "./Partners.jsx";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Events />
        <Partners />
        <Footer />
      </div>
    );
  }
}
