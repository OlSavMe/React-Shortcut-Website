import React from "react";

// Reusable components
import { Nav, Footer } from "../../components/index.jsx";

// Non-reusable components
import Banner from "./Banner.jsx";
import EventList from "./EventList.jsx";
import Partners from "./Partners.jsx";

// Stylesheets

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <Nav />
        <Banner />
        <EventList />
        <Partners />
        <Footer />
      </div>
    );
  }
}
