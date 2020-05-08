import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Home
import Home from "./sections/home/Home";

// About
import AboutUs from "./layout/1_about/1_about_us/AboutUs";
import SuccessStories from "./layout/1_about/2_success_stories/SuccessStories";
import Team from "./layout/1_about/3_team/Team";
import Code from "./layout/1_about/4_code/Code";
import FAQ from "./layout/1_about/5_faq/FAQ";
import Contact from "./layout/1_about/6_contact/Contact";

// Resources
import ForMedia from "./layout/3_resources/3_for_media/ForMedia";

// Events
import AllEvents from "./layout/2_events/AllEvents";

// Footer
import PrivacyPolicies from "./layout/footer/PrivacyPolicies";

export class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home} />

          {/* About */}
          <Route path="/story" component={AboutUs} />
          <Route path="/success" component={SuccessStories} />
          <Route path="/team" component={Team} />
          <Route path="/code" component={Code} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />

          {/* Resources */}
          <Route path="/media" component={ForMedia} />

          {/* All events */}
          <Route path="/all-events" component={AllEvents} />

          {/* Footer */}
          <Route path="/privacy" component={PrivacyPolicies} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
