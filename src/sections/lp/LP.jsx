import React from "react";
import { Nav, Footer } from "../../components/index.jsx";
import Banner from "./Banner.jsx";
import Events from "./Events.jsx";
import Partners from "./Partners.jsx";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <Events />
        <Partners />
        <Footer />
      </div>
    );
  }
}
